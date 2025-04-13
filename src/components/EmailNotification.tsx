'use client';

import { useState } from 'react';

interface EmailNotificationProps {
  email: string;
  templateName: 'order_confirmation' | 'payment_received' | 'funding_update';
  data?: Record<string, any>;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function EmailNotification({
  email,
  templateName,
  data = {},
  onSuccess,
  onError,
  className = ''
}: EmailNotificationProps) {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // This is a mock function that simulates sending an email notification
  // In a real implementation, this would use an email service API
  const sendNotification = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error');
      const error = 'Invalid email address';
      setErrorMessage(error);
      if (onError) onError(error);
      return;
    }

    setIsSending(true);
    setStatus('idle');
    setErrorMessage(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful email sending (95% success rate)
      const isSuccessful = Math.random() < 0.95;
      
      if (isSuccessful) {
        setStatus('success');
        if (onSuccess) {
          onSuccess();
        }
        
        // Log the email that would be sent in a real implementation
        console.log('Email notification sent:', {
          to: email,
          template: templateName,
          data
        });
      } else {
        throw new Error('Failed to send email notification. Please try again.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setStatus('error');
      setErrorMessage(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsSending(false);
    }
  };

  // Get template preview based on template name
  const getTemplatePreview = () => {
    switch (templateName) {
      case 'order_confirmation':
        return {
          subject: 'Your Kick Shot Pre-Order Confirmation',
          preview: `Thank you for pre-ordering Kick Shot! Your order #${data.orderId || 'XXXXXX'} has been received and will be processed once our funding goal is reached.`
        };
      case 'payment_received':
        return {
          subject: 'Payment Received for Your Kick Shot Pre-Order',
          preview: `We've successfully received your payment of $${data.amount?.toFixed(2) || 'XX.XX'} for your Kick Shot pre-order. Thank you for your support!`
        };
      case 'funding_update':
        return {
          subject: 'Kick Shot Funding Update',
          preview: `Great news! We're now at ${data.percentage || 'XX'}% of our funding goal. Thank you for being part of this journey.`
        };
      default:
        return {
          subject: 'Kick Shot Notification',
          preview: 'Thank you for your interest in Kick Shot!'
        };
    }
  };

  const template = getTemplatePreview();

  return (
    <div className={`${className}`}>
      {status === 'error' && errorMessage && (
        <div className="bg-blood-red bg-opacity-20 border border-blood-red text-blood-red p-4 mb-4">
          {errorMessage}
        </div>
      )}
      
      {status === 'success' && (
        <div className="bg-neuro-yellow bg-opacity-20 border border-neuro-yellow text-blackout-black p-4 mb-4">
          Email notification sent successfully to {email}!
        </div>
      )}
      
      <div className="bg-blackout-black p-4 mb-4">
        <div className="text-neuro-yellow font-bold mb-2">Email Preview:</div>
        <div className="text-white mb-2"><strong>To:</strong> {email}</div>
        <div className="text-white mb-2"><strong>Subject:</strong> {template.subject}</div>
        <div className="text-white p-3 border border-asphalt-gray">
          {template.preview}
        </div>
      </div>
      
      <button
        type="button"
        onClick={sendNotification}
        disabled={isSending}
        className={`
          w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 
          text-center transition-colors
          ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-toxic-cyan'}
        `}
      >
        {isSending ? 'Sending...' : 'Send Notification Email'}
      </button>
    </div>
  );
}
