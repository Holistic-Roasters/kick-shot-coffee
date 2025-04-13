import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blackout-black py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-trench text-neuro-yellow mb-6">
            REFUND POLICY
          </h1>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            At Kick Shot, we're committed to customer satisfaction and transparency. 
            Our refund policy for this pre-launch campaign is designed to protect your investment.
          </p>
        </div>
      </section>

      {/* Funding Goal Policy */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            FUNDING GOAL POLICY
          </h2>
          
          <div className="max-w-4xl mx-auto bg-blackout-black p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-trench text-toxic-cyan mb-4">OUR COMMITMENT</h3>
                <p className="text-white mb-4">
                  We've set a funding goal of $50,000 to ensure we can deliver Kick Shot at the quality 
                  standards we've promised. This goal must be reached by the campaign end date for production to proceed.
                </p>
                <p className="text-white">
                  If the funding goal is not met, all backers will receive a full refund of their pre-order amount,
                  with no deductions or processing fees withheld.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-trench text-toxic-cyan mb-4">REFUND TIMELINE</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-neuro-yellow text-blackout-black font-trench p-2 w-10 text-center mr-4">1</div>
                    <div className="text-white">
                      Campaign end date reached and funding goal assessment completed
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-neuro-yellow text-blackout-black font-trench p-2 w-10 text-center mr-4">2</div>
                    <div className="text-white">
                      If goal not met, refund process initiated within 3 business days
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-neuro-yellow text-blackout-black font-trench p-2 w-10 text-center mr-4">3</div>
                    <div className="text-white">
                      Refunds processed to original payment method
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-neuro-yellow text-blackout-black font-trench p-2 w-10 text-center mr-4">4</div>
                    <div className="text-white">
                      Confirmation email sent once refund is processed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blackout-black p-8">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4 text-center">AUTOMATIC REFUND PROCESS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-16 h-16 bg-neuro-yellow text-blackout-black font-trench text-2xl flex items-center justify-center rounded-full mx-auto mb-4">1</div>
                  <p className="text-white">
                    Campaign ends and funding status is determined
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-neuro-yellow text-blackout-black font-trench text-2xl flex items-center justify-center rounded-full mx-auto mb-4">2</div>
                  <p className="text-white">
                    If goal not met, system automatically initiates refunds
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-neuro-yellow text-blackout-black font-trench text-2xl flex items-center justify-center rounded-full mx-auto mb-4">3</div>
                  <p className="text-white">
                    Full amount returned to original payment method
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Conditions */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            REFUND CONDITIONS
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-asphalt-gray p-6">
                <h3 className="text-2xl font-trench text-toxic-cyan mb-4">ELIGIBLE FOR REFUND</h3>
                <ul className="text-white space-y-3">
                  <li className="flex items-start">
                    <span className="text-neuro-yellow mr-2">•</span>
                    <span>Funding goal not reached by campaign end date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neuro-yellow mr-2">•</span>
                    <span>Product specifications change significantly from what was advertised</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neuro-yellow mr-2">•</span>
                    <span>Shipping delayed by more than 90 days from estimated date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neuro-yellow mr-2">•</span>
                    <span>Duplicate or erroneous charges</span>
                  </li>
                </ul>
              </div>
              <div className="bg-asphalt-gray p-6">
                <h3 className="text-2xl font-trench text-toxic-cyan mb-4">NOT ELIGIBLE FOR REFUND</h3>
                <ul className="text-white space-y-3">
                  <li className="flex items-start">
                    <span className="text-blood-red mr-2">•</span>
                    <span>Change of mind after funding goal is reached</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blood-red mr-2">•</span>
                    <span>Minor changes to product specifications or packaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blood-red mr-2">•</span>
                    <span>Shipping delays under 90 days from estimated date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blood-red mr-2">•</span>
                    <span>Refund requests after product has shipped</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-asphalt-gray p-6 mb-12">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">REFUND REQUEST PROCESS</h3>
              <p className="text-white mb-4">
                If you need to request a refund for a reason other than the funding goal not being met,
                please follow these steps:
              </p>
              <ol className="text-white space-y-3">
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">1.</span>
                  <span>Email our support team at refunds@kickshot.com with your order number in the subject line</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">2.</span>
                  <span>Include your full name, email address used for the order, and reason for refund request</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">3.</span>
                  <span>Our team will review your request and respond within 3 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">4.</span>
                  <span>If approved, refunds will be processed to the original payment method within 5-10 business days</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8">
            CONTACT INFORMATION
          </h2>
          
          <div className="max-w-2xl mx-auto bg-blackout-black p-8">
            <h3 className="text-2xl font-trench text-toxic-cyan mb-4">REFUND INQUIRIES</h3>
            <p className="text-white mb-6">
              For any questions regarding our refund policy or to check the status of a refund request,
              please contact our dedicated support team:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <h4 className="font-trench text-neuro-yellow mb-2">EMAIL</h4>
                <p>refunds@kickshot.com</p>
                <p className="text-sm mt-2">Response within 24 hours</p>
              </div>
              <div>
                <h4 className="font-trench text-neuro-yellow mb-2">SUPPORT HOURS</h4>
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">How long do refunds take to process?</h3>
              <p className="text-white">
                Automatic refunds due to funding goals not being met will be processed within 3-5 business days.
                Other approved refund requests typically take 5-10 business days to appear in your account.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">Will I be charged immediately when I pre-order?</h3>
              <p className="text-white">
                Yes, your payment method will be charged at the time of pre-order. This allows us to accurately
                track our progress toward the funding goal and secure production capacity.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">What happens if I used PayPal for my pre-order?</h3>
              <p className="text-white">
                Refunds for PayPal orders will be processed back to your PayPal account. The same timeline
                applies, but PayPal may have additional processing time on their end.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">Can I get a partial refund?</h3>
              <p className="text-white">
                Partial refunds are not available for pre-orders. If you wish to change your order,
                please request a full refund and place a new order with your desired items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            LEGAL INFORMATION
          </h2>
          
          <div className="max-w-4xl mx-auto bg-blackout-black p-8">
            <p className="text-white mb-4">
              This refund policy is part of our Terms and Conditions. By placing a pre-order,
              you acknowledge that you have read and agree to these terms.
            </p>
            <p className="text-white mb-4">
              We reserve the right to modify this policy at any time. Any changes will be effective
              immediately upon posting to this page, with the updated effective date.
            </p>
            <p className="text-white mb-4">
              This policy was last updated on April 13, 2025.
            </p>
            <p className="text-white">
              For any disputes related to refunds, we will work to resolve the issue directly with you.
              If we cannot reach a resolution, disputes will be handled in accordance with our Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-6">
            READY TO JOIN THE REVOLUTION?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            With our transparent refund policy, you can pre-order with confidence.
            Secure your Kick Shot package today and be part of the future of performance enhancement.
          </p>
          <Link href="/preorder" className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-8 inline-block hover:bg-toxic-cyan transition-colors">
            Pre-Order Now
          </Link>
        </div>
      </section>
    </div>
  );
}
