'use client';

import { useState } from 'react';

interface StripePaymentProps {
  amount: number;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function StripePayment({
  amount,
  onSuccess,
  onError,
  className = ''
}: StripePaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // This is a mock function that simulates Stripe payment processing
  // In a real implementation, this would use the Stripe API
  const processPayment = async () => {
    setIsProcessing(true);
    setPaymentError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment (90% success rate)
      const isSuccessful = Math.random() < 0.9;
      
      if (isSuccessful) {
        // Generate a fake payment ID
        const paymentId = 'pi_' + Math.random().toString(36).substring(2, 15);
        if (onSuccess) {
          onSuccess(paymentId);
        }
      } else {
        throw new Error('Payment declined by issuing bank. Please try another payment method.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setPaymentError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`${className}`}>
      {paymentError && (
        <div className="bg-blood-red bg-opacity-20 border border-blood-red text-blood-red p-4 mb-4">
          {paymentError}
        </div>
      )}
      
      <button
        type="button"
        onClick={processPayment}
        disabled={isProcessing}
        className={`
          w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-4 
          text-center transition-colors text-xl
          ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-toxic-cyan'}
        `}
      >
        {isProcessing ? 'Processing Payment...' : `Pay $${amount.toFixed(2)}`}
      </button>
      
      <div className="flex items-center justify-center mt-4">
        <div className="text-white text-sm flex items-center">
          <span className="mr-2">🔒</span>
          <span>Secured by Stripe</span>
        </div>
      </div>
    </div>
  );
}
