import Link from 'next/link';

export default function Product() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blackout-black py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-trench text-neuro-yellow mb-6">
              KICK SHOT
            </h1>
            <h2 className="text-3xl md:text-4xl font-trench text-white mb-6">
              ANNIHILATE THE MUNDANE
            </h2>
            <p className="text-xl mb-8 text-white">
              Precision-engineered neurochemical energy for high-performers who demand more.
              Not just another energy product—a complete cognitive enhancement system.
            </p>
            <Link href="/preorder" className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-8 inline-block hover:bg-toxic-cyan transition-colors">
              Pre-Order Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/images/Kick-Shot-product-closed-box.png" 
              alt="Kick Shot Coffee Product" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <img 
                  src="/images/Kick-Shot-product-closed-box.png" 
                  alt="Kick Shot Closed Box" 
                  className="w-full h-auto"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/images/Kick-Shot-product-open-box.png" 
                    alt="Kick Shot Open Box" 
                    className="w-full h-auto"
                  />
                  <img 
                    src="/images/Kick-Shot-product-closed-box.png" 
                    alt="Kick Shot Product Detail" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-trench text-neuro-yellow mb-6">
                PRODUCT DETAILS
              </h2>
              <p className="text-white mb-6">
                Kick Shot is a revolutionary energy solution designed for high-performers who need sustained focus and energy without the crash associated with traditional caffeine products.
              </p>
              <p className="text-white mb-6">
                Each box contains 30 precisely formulated packets, engineered to deliver optimal cognitive enhancement for up to 6 hours per dose.
              </p>
              
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4 mt-8">
                KEY BENEFITS
              </h3>
              <ul className="text-white space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">•</span>
                  <span>Enhanced mental clarity and focus for up to 6 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">•</span>
                  <span>Smooth, sustained energy without jitters or crash</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">•</span>
                  <span>Improved cognitive performance and reaction time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">•</span>
                  <span>Scientifically formulated with nootropic compounds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">•</span>
                  <span>Convenient single-serve packets for precise dosing</span>
                </li>
              </ul>
              
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">
                USAGE INSTRUCTIONS
              </h3>
              <ol className="text-white space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">1.</span>
                  <span>Mix one packet with 8-10 oz of cold water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">2.</span>
                  <span>Shake vigorously for 5-10 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">3.</span>
                  <span>Consume immediately for optimal effect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">4.</span>
                  <span>Limit to 2 packets per 24-hour period</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Backing */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            THE SCIENCE BEHIND KICK SHOT
          </h2>
          <p className="text-white text-center max-w-3xl mx-auto mb-12">
            Our formula is based on cutting-edge neuroscience research, combining proven compounds 
            that work synergistically to enhance cognitive function.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-4">NOOTROPIC COMPLEX</h3>
              <p className="text-white">
                Our proprietary blend of cognitive enhancers targets key neurotransmitters 
                to improve memory, focus, and mental processing speed.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-4">ENERGY MODULATION</h3>
              <p className="text-white">
                Advanced time-release technology ensures a steady flow of energy compounds, 
                eliminating the peaks and crashes of conventional stimulants.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-4">NEURAL OPTIMIZATION</h3>
              <p className="text-white">
                Supporting compounds enhance neural plasticity and protect against oxidative stress, 
                promoting long-term brain health alongside immediate performance benefits.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/science" className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-8 inline-block hover:bg-toxic-cyan transition-colors">
              Explore The Science
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing & Options */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            PRE-ORDER OPTIONS
          </h2>
          <p className="text-white text-center max-w-3xl mx-auto mb-12">
            Be among the first to experience Kick Shot with our exclusive pre-launch packages.
            Early backers receive special pricing and exclusive perks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blackout-black p-6 border border-asphalt-gray hover:border-neuro-yellow transition-colors">
              <h3 className="text-2xl font-trench text-neuro-yellow mb-2">EARLY BIRD</h3>
              <p className="text-toxic-cyan text-xl mb-4">$49</p>
              <ul className="text-white space-y-2 mb-6">
                <li>• 1 Box of Kick Shot (30 packets)</li>
                <li>• 20% off retail price</li>
                <li>• Early access shipping</li>
              </ul>
              <Link href="/preorder?tier=early-bird" className="block bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors">
                Select Package
              </Link>
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
              <Link href="/preorder?tier=power-user" className="block bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors">
                Select Package
              </Link>
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
              <Link href="/preorder?tier=ultimate-pack" className="block bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors">
                Select Package
              </Link>
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
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">When will Kick Shot ship?</h3>
              <p className="text-white">
                We anticipate shipping all pre-orders within 60 days of our funding goal being reached.
                Early Bird backers will receive priority shipping.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">What if I don't like the product?</h3>
              <p className="text-white">
                We're confident you'll love Kick Shot. However, if you're not satisfied, please contact
                our support team within 30 days of receiving your order to discuss options.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">Is Kick Shot safe?</h3>
              <p className="text-white">
                Kick Shot is formulated with extensively researched compounds. However, as with any supplement,
                consult with your healthcare provider before use, especially if you have existing health conditions.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">What if the funding goal isn't reached?</h3>
              <p className="text-white">
                If we don't reach our funding goal, all pre-orders will be fully refunded automatically.
                See our <Link href="/refund-policy" className="text-neuro-yellow hover:text-toxic-cyan">refund policy</Link> for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order CTA */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-trench text-neuro-yellow mb-6">
            READY TO ELEVATE YOUR PERFORMANCE?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join the revolution in cognitive enhancement. Pre-order now to secure your Kick Shot
            at exclusive early-backer pricing.
          </p>
          <div className="mb-8">
            <Link href="/preorder" className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-8 inline-block hover:bg-toxic-cyan transition-colors text-xl">
              Pre-Order Now
            </Link>
          </div>
          <div className="flex justify-center gap-4 md:gap-8 mb-8">
            <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">30</div>
              <div className="text-sm text-white">DAYS</div>
            </div>
            <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">12</div>
              <div className="text-sm text-white">HOURS</div>
            </div>
            <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">45</div>
              <div className="text-sm text-white">MINUTES</div>
            </div>
            <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
              <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">20</div>
              <div className="text-sm text-white">SECONDS</div>
            </div>
          </div>
          <div className="bg-blackout-black p-6 inline-block">
            <div className="text-xl font-trench text-neuro-yellow mb-2">FUNDING GOAL</div>
            <div className="w-full bg-asphalt-gray h-4 mb-2">
              <div className="bg-neuro-yellow h-4" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-white">
              <span>$32,500 / $50,000</span>
              <span>65%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
