import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blackout-black py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-trench text-neuro-yellow mb-6">
              ANNIHILATE THE MUNDANE
            </h1>
            <p className="text-xl mb-8 text-white">
              Precision-engineered neurochemical energy for high-performers. 
              Kick Shot delivers a scientifically formulated blend that enhances 
              focus, clarity, and productivity without the crash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/preorder" className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-8 text-center hover:bg-toxic-cyan transition-colors">
                Pre-Order Now
              </Link>
              <Link href="/product" className="border border-neuro-yellow text-neuro-yellow font-trench uppercase py-3 px-8 text-center hover:bg-neuro-yellow hover:text-blackout-black transition-colors">
                Learn More
              </Link>
            </div>
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

      {/* Countdown Section */}
      <section className="bg-asphalt-gray py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-6">
            LAUNCHING IN
          </h2>
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
          <p className="text-white mb-6">
            Be among the first to experience the future of performance enhancement.
            Early backers get exclusive perks and pricing.
          </p>
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

      {/* Product Features */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-trench text-neuro-yellow mb-12 text-center">
            ENGINEERED FOR EXCELLENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">PRECISION FOCUS</h3>
              <p className="text-white">
                Our proprietary blend targets key neurotransmitters to enhance cognitive 
                function and maintain laser-sharp focus for hours.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">SUSTAINED ENERGY</h3>
              <p className="text-white">
                Unlike traditional energy products, Kick Shot delivers a steady, 
                controlled release of energy without the crash or jitters.
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">PEAK PERFORMANCE</h3>
              <p className="text-white">
                Scientifically formulated to optimize brain function and physical 
                performance when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backer Rewards */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-trench text-neuro-yellow mb-12 text-center">
            EXCLUSIVE BACKER REWARDS
          </h2>
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
                Select Reward
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
                Select Reward
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
                Select Reward
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-trench text-neuro-yellow mb-6">
            STAY CONNECTED
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates, early access to new products,
            and special offers only available to our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-asphalt-gray text-white px-4 py-3 flex-grow"
            />
            <button className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-6 hover:bg-toxic-cyan transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
