import Link from 'next/link';
import { useState } from 'react';

export default function Preorder() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blackout-black py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-trench text-neuro-yellow mb-6">
            BE THE FIRST TO EXPERIENCE KICK SHOT
          </h1>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Join our exclusive pre-launch campaign and secure your Kick Shot at special early-backer pricing.
            Limited quantities available at these prices.
          </p>
          
          <div className="flex justify-center gap-4 md:gap-8 mb-8">
            <div className="bg-asphalt-gray p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">30</div>
              <div className="text-sm text-white">DAYS</div>
            </div>
            <div className="bg-asphalt-gray p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">12</div>
              <div className="text-sm text-white">HOURS</div>
            </div>
            <div className="bg-asphalt-gray p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">45</div>
              <div className="text-sm text-white">MINUTES</div>
            </div>
            <div className="bg-asphalt-gray p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">20</div>
              <div className="text-sm text-white">SECONDS</div>
            </div>
          </div>
          
          <div className="bg-asphalt-gray p-6 inline-block mb-8">
            <div className="text-xl font-trench text-neuro-yellow mb-2">FUNDING GOAL</div>
            <div className="w-full bg-blackout-black h-4 mb-2">
              <div className="bg-neuro-yellow h-4" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-white">
              <span>$32,500 / $50,000</span>
              <span>65%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Backer Rewards Selection */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            SELECT YOUR BACKER PACKAGE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blackout-black p-6 border border-asphalt-gray hover:border-neuro-yellow transition-colors">
              <h3 className="text-2xl font-trench text-neuro-yellow mb-2">EARLY BIRD</h3>
              <p className="text-toxic-cyan text-xl mb-4">$49</p>
              <ul className="text-white space-y-2 mb-6">
                <li>• 1 Box of Kick Shot (30 packets)</li>
                <li>• 20% off retail price</li>
                <li>• Early access shipping</li>
              </ul>
              <button className="w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors">
                Select Package
              </button>
            </div>
            <div className="bg-blackout-black p-6 border-2 border-neuro-yellow relative">
              <div className="absolute top-0 right-0 bg-neuro-yellow text-blackout-black font-trench px-4 py-1 transform translate-y-[-50%]">
                POPULAR
              </div>
              <h3 className="text-2xl font-trench text-neuro-yellow mb-2">POWER USER</h3>
              <p className="text-toxic-cyan text-xl mb-4">$89</p>
              <ul className="text-white space-y-2 mb-6">
                <li>• 2 Boxes of Kick Shot (60 packets)</li>
                <li>• Limited edition shaker</li>
                <li>• Exclusive digital guide</li>
                <li>• 25% off retail price</li>
              </ul>
              <button className="w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors">
                Select Package
              </button>
            </div>
            <div className="bg-blackout-black p-6 border border-asphalt-gray hover:border-neuro-yellow transition-colors">
              <h3 className="text-2xl font-trench text-neuro-yellow mb-2">ULTIMATE PACK</h3>
              <p className="text-toxic-cyan text-xl mb-4">$149</p>
              <ul className="text-white space-y-2 mb-6">
                <li>• 3 Boxes of Kick Shot (90 packets)</li>
                <li>• Premium metal shaker</li>
                <li>• Exclusive merchandise bundle</li>
                <li>• VIP early access to future products</li>
                <li>• 30% off retail price</li>
              </ul>
              <button className="w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors">
                Select Package
              </button>
            </div>
          </div>
          
          {/* Selected Package Details */}
          <div className="bg-blackout-black p-8 max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-trench text-neuro-yellow mb-6">SELECTED PACKAGE: POWER USER</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-trench text-toxic-cyan mb-4">PACKAGE CONTENTS</h4>
                <ul className="text-white space-y-2">
                  <li>• 2 Boxes of Kick Shot (60 packets)</li>
                  <li>• Limited edition shaker</li>
                  <li>• Exclusive digital guide</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-trench text-toxic-cyan mb-4">QUANTITY</h4>
                <div className="flex items-center mb-6">
                  <button className="bg-asphalt-gray text-white px-4 py-2">-</button>
                  <input type="number" value="1" min="1" max="10" className="bg-asphalt-gray text-white text-center w-16 py-2" />
                  <button className="bg-asphalt-gray text-white px-4 py-2">+</button>
                </div>
                
                <h4 className="text-xl font-trench text-toxic-cyan mb-4">PRICE BREAKDOWN</h4>
                <div className="text-white space-y-2">
                  <div className="flex justify-between">
                    <span>Package Price:</span>
                    <span>$89.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between font-bold text-neuro-yellow">
                    <span>Total:</span>
                    <span>$89.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            COMPLETE YOUR PRE-ORDER
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-trench text-toxic-cyan mb-6">PERSONAL INFORMATION</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-white mb-2">Full Name</label>
                  <input type="text" className="w-full bg-asphalt-gray text-white p-3" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-white mb-2">Email Address</label>
                  <input type="email" className="w-full bg-asphalt-gray text-white p-3" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone Number (Optional)</label>
                  <input type="tel" className="w-full bg-asphalt-gray text-white p-3" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <h3 className="text-2xl font-trench text-toxic-cyan mb-6">SHIPPING INFORMATION</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Address</label>
                  <input type="text" className="w-full bg-asphalt-gray text-white p-3" placeholder="Enter your street address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">City</label>
                    <input type="text" className="w-full bg-asphalt-gray text-white p-3" placeholder="City" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">State/Province</label>
                    <input type="text" className="w-full bg-asphalt-gray text-white p-3" placeholder="State/Province" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">Postal Code</label>
                    <input type="text" className="w-full bg-asphalt-gray text-white p-3" placeholder="Postal Code" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Country</label>
                    <select className="w-full bg-asphalt-gray text-white p-3">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Other</option>
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
                    <input type="text" className="w-full bg-blackout-black text-white p-3" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Expiration Date</label>
                      <input type="text" className="w-full bg-blackout-black text-white p-3" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Security Code</label>
                      <input type="text" className="w-full bg-blackout-black text-white p-3" placeholder="CVC" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-white">Or pay with:</div>
                  <button className="bg-blackout-black text-white py-2 px-4">PayPal</button>
                </div>
                
                <div className="text-white text-sm">
                  All transactions are secure and encrypted. Your payment information is never stored on our servers.
                </div>
              </div>
              
              <h3 className="text-2xl font-trench text-toxic-cyan mb-6">ORDER SUMMARY</h3>
              
              <div className="bg-asphalt-gray p-6 mb-8">
                <div className="text-white space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Power User Package:</span>
                    <span>$89.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>$7.12</span>
                  </div>
                  <div className="flex justify-between font-bold text-neuro-yellow pt-3 border-t border-blackout-black">
                    <span>Total:</span>
                    <span>$96.12</span>
                  </div>
                </div>
                
                <div className="text-white text-sm mb-6">
                  Estimated shipping date: August 2025 (after funding goal is reached)
                </div>
                
                <div className="text-white text-sm mb-6">
                  <div className="flex items-start mb-2">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>I agree to the <Link href="/terms" className="text-neuro-yellow hover:text-toxic-cyan">Terms and Conditions</Link> and acknowledge the <Link href="/refund-policy" className="text-neuro-yellow hover:text-toxic-cyan">Refund Policy</Link>.</span>
                  </div>
                </div>
                
                <button className="w-full bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-4 text-center hover:bg-toxic-cyan transition-colors text-xl">
                  Complete Pre-Order
                </button>
              </div>
              
              <div className="text-white text-center">
                <p className="mb-4">
                  <span className="text-neuro-yellow">Note:</span> If our funding goal is not met, you will receive a full refund.
                  See our <Link href="/refund-policy" className="text-neuro-yellow hover:text-toxic-cyan">refund policy</Link> for details.
                </p>
                <div className="flex justify-center space-x-4">
                  <span>🔒 Secure Payment</span>
                  <span>💳 Stripe</span>
                  <span>💰 PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
