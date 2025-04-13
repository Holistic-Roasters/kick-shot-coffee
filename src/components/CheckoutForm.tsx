'use client';

import { useState } from 'react';
import { BackerReward } from './BackerRewards';

interface CheckoutFormProps {
  selectedReward?: BackerReward;
  onSubmit?: (formData: any) => void;
  className?: string;
}

export default function CheckoutForm({
  selectedReward,
  onSubmit,
  className = ''
}: CheckoutFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    paymentMethod: 'credit',
    termsAccepted: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData({
      ...formData,
      [name]: newValue
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State/Province is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    
    // Payment validation
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expirationDate) newErrors.expirationDate = 'Expiration date is required';
      if (!formData.securityCode) newErrors.securityCode = 'Security code is required';
    }
    
    // Terms acceptance
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit({
          ...formData,
          quantity,
          reward: selectedReward
        });
      }
    }
  };

  // Calculate totals
  const subtotal = selectedReward ? selectedReward.price * quantity : 0;
  const shipping = 0; // Free shipping
  const taxRate = 0.08; // 8% tax rate
  const tax = Math.round(subtotal * taxRate * 100) / 100;
  const total = subtotal + shipping + tax;

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-trench text-toxic-cyan mb-6">PERSONAL INFORMATION</h3>
          
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full bg-asphalt-gray text-white p-3 ${errors.fullName ? 'border border-blood-red' : ''}`} 
                placeholder="Enter your full name" 
              />
              {errors.fullName && <p className="text-blood-red text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full bg-asphalt-gray text-white p-3 ${errors.email ? 'border border-blood-red' : ''}`} 
                placeholder="Enter your email address" 
              />
              {errors.email && <p className="text-blood-red text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-white mb-2">Phone Number (Optional)</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-asphalt-gray text-white p-3" 
                placeholder="Enter your phone number" 
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-trench text-toxic-cyan mb-6">SHIPPING INFORMATION</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Address</label>
              <input 
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full bg-asphalt-gray text-white p-3 ${errors.address ? 'border border-blood-red' : ''}`} 
                placeholder="Enter your street address" 
              />
              {errors.address && <p className="text-blood-red text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">City</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full bg-asphalt-gray text-white p-3 ${errors.city ? 'border border-blood-red' : ''}`} 
                  placeholder="City" 
                />
                {errors.city && <p className="text-blood-red text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-white mb-2">State/Province</label>
                <input 
                  type="text" 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full bg-asphalt-gray text-white p-3 ${errors.state ? 'border border-blood-red' : ''}`} 
                  placeholder="State/Province" 
                />
                {errors.state && <p className="text-blood-red text-sm mt-1">{errors.state}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Postal Code</label>
                <input 
                  type="text" 
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={`w-full bg-asphalt-gray text-white p-3 ${errors.postalCode ? 'border border-blood-red' : ''}`} 
                  placeholder="Postal Code" 
                />
                {errors.postalCode && <p className="text-blood-red text-sm mt-1">{errors.postalCode}</p>}
              </div>
              <div>
                <label className="block text-white mb-2">Country</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-asphalt-gray text-white p-3"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-trench text-toxic-cyan mb-6">PAYMENT INFORMATION</h3>
          
          <div className="bg-asphalt-gray p-6 mb-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-white mb-2">Card Number</label>
                <input 
                  type="text" 
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={`w-full bg-blackout-black text-white p-3 ${errors.cardNumber ? 'border border-blood-red' : ''}`} 
                  placeholder="1234 5678 9012 3456" 
                />
                {errors.cardNumber && <p className="text-blood-red text-sm mt-1">{errors.cardNumber}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Expiration Date</label>
                  <input 
                    type="text" 
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                    className={`w-full bg-blackout-black text-white p-3 ${errors.expirationDate ? 'border border-blood-red' : ''}`} 
                    placeholder="MM/YY" 
                  />
                  {errors.expirationDate && <p className="text-blood-red text-sm mt-1">{errors.expirationDate}</p>}
                </div>
                <div>
                  <label className="block text-white mb-2">Security Code</label>
                  <input 
                    type="text" 
                    name="securityCode"
                    value={formData.securityCode}
                    onChange={handleInputChange}
                    className={`w-full bg-blackout-black text-white p-3 ${errors.securityCode ? 'border border-blood-red' : ''}`} 
                    placeholder="CVC" 
                  />
                  {errors.securityCode && <p className="text-blood-red text-sm mt-1">{errors.securityCode}</p>}
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="mr-4 text-white">Or pay with:</div>
              <button 
                type="button"
                onClick={() => setFormData({...formData, paymentMethod: 'paypal'})}
                className={`py-2 px-4 ${formData.paymentMethod === 'paypal' ? 'bg-toxic-cyan text-blackout-black' : 'bg-blackout-black text-white'}`}
              >
                PayPal
              </button>
            </div>
            
            <div className="text-white text-sm">
              All transactions are secure and encrypted. Your payment information is never stored on our servers.
            </div>
          </div>
          
          <h3 className="text-2xl font-trench text-toxic-cyan mb-6">ORDER SUMMARY</h3>
          
          <div className="bg-asphalt-gray p-6 mb-8">
            {selectedReward && (
              <>
                <div className="text-white space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{selectedReward.title} Package:</span>
                    <span>${selectedReward.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Quantity:</span>
                    <div className="flex items-center">
                      <button 
                        type="button"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="bg-blackout-black text-white px-4 py-2"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                        min="1" 
                        max="10" 
                        className="bg-blackout-black text-white text-center w-16 py-2" 
                      />
                      <button 
                        type="button"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="bg-blackout-black text-white px-4 py-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-neuro-yellow pt-3 border-t border-blackout-black">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="text-white text-sm mb-6">
                  Estimated shipping date: August 2025 (after funding goal is reached)
                </div>
              </>
            )}
            
            <div className="text-white text-sm mb-6">
              <div className="flex items-start mb-2">
                <input 
                  type="checkbox" 
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className={`mt-1 mr-2 ${errors.termsAccepted ? 'border border-blood-red' : ''}`} 
                />
                <span>I agree to the Terms and Conditions and acknowledge the Refund Policy.</span>
              </div>
              {errors.termsAccepted && <p className="text-blood-red text-sm mt-1">{errors.termsAccepted}</p>}
            </div>
            
            <button 
              type="submit"
              className="w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-4 text-center hover:bg-toxic-cyan transition-colors text-xl"
            >
              Complete Pre-Order
            </button>
          </div>
          
          <div className="text-white text-center">
            <p className="mb-4">
              <span className="text-neuro-yellow">Note:</span> If our funding goal is not met, you will receive a full refund.
            </p>
            <div className="flex justify-center space-x-4">
              <span>🔒 Secure Payment</span>
              <span>💳 Stripe</span>
              <span>💰 PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
