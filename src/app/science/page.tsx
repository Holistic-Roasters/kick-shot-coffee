import Link from 'next/link';

export default function Science() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blackout-black py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-trench text-neuro-yellow mb-6">
            THE SCIENCE BEHIND KICK SHOT
          </h1>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Our formula is based on cutting-edge neuroscience research, combining proven compounds 
            that work synergistically to enhance cognitive function and physical performance.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-asphalt-gray p-8 rounded">
              {/* Placeholder for molecular structure visualization */}
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-neuro-yellow mb-4">
                <span className="text-neuro-yellow font-trench">MOLECULAR STRUCTURE VISUALIZATION</span>
              </div>
              <p className="text-white">
                Kick Shot's proprietary formula targets key neurotransmitters and metabolic pathways
                to deliver sustained energy and enhanced cognitive performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neurochemical Breakdown */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            NEUROCHEMICAL BREAKDOWN
          </h2>
          <p className="text-white text-center max-w-3xl mx-auto mb-12">
            Our formula works by optimizing key neurochemical pathways to enhance cognitive function,
            increase energy production, and improve overall mental performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-4">DOPAMINE OPTIMIZATION</h3>
              <div className="h-32 flex items-center justify-center border-2 border-dashed border-toxic-cyan mb-4">
                <span className="text-toxic-cyan font-trench">COMPOUND VISUALIZATION</span>
              </div>
              <p className="text-white">
                Our proprietary dopamine modulators enhance focus, motivation, and reward pathways
                without the depletion associated with traditional stimulants.
              </p>
            </div>
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-4">ACETYLCHOLINE ENHANCEMENT</h3>
              <div className="h-32 flex items-center justify-center border-2 border-dashed border-toxic-cyan mb-4">
                <span className="text-toxic-cyan font-trench">COMPOUND VISUALIZATION</span>
              </div>
              <p className="text-white">
                Targeted cholinergic compounds support memory formation, learning capacity, and
                neural communication for improved cognitive processing.
              </p>
            </div>
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-4">METABOLIC ENHANCEMENT</h3>
              <div className="h-32 flex items-center justify-center border-2 border-dashed border-toxic-cyan mb-4">
                <span className="text-toxic-cyan font-trench">COMPOUND VISUALIZATION</span>
              </div>
              <p className="text-white">
                Our metabolic enhancers optimize cellular energy production, ensuring sustained
                performance without the crash associated with simple sugars and caffeine.
              </p>
            </div>
          </div>
          
          <div className="bg-blackout-black p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-trench text-neuro-yellow mb-4 text-center">
              COMPARISON WITH TRADITIONAL ENERGY PRODUCTS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-asphalt-gray">
                    <th className="py-3 px-4 text-left">Feature</th>
                    <th className="py-3 px-4 text-center">Kick Shot</th>
                    <th className="py-3 px-4 text-center">Traditional Energy Drinks</th>
                    <th className="py-3 px-4 text-center">Standard Coffee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-asphalt-gray">
                    <td className="py-3 px-4">Duration of Effect</td>
                    <td className="py-3 px-4 text-center text-neuro-yellow">6+ hours</td>
                    <td className="py-3 px-4 text-center">1-3 hours</td>
                    <td className="py-3 px-4 text-center">2-4 hours</td>
                  </tr>
                  <tr className="border-b border-asphalt-gray">
                    <td className="py-3 px-4">Crash Effect</td>
                    <td className="py-3 px-4 text-center text-neuro-yellow">Minimal</td>
                    <td className="py-3 px-4 text-center">Severe</td>
                    <td className="py-3 px-4 text-center">Moderate</td>
                  </tr>
                  <tr className="border-b border-asphalt-gray">
                    <td className="py-3 px-4">Cognitive Enhancement</td>
                    <td className="py-3 px-4 text-center text-neuro-yellow">Comprehensive</td>
                    <td className="py-3 px-4 text-center">Minimal</td>
                    <td className="py-3 px-4 text-center">Limited</td>
                  </tr>
                  <tr className="border-b border-asphalt-gray">
                    <td className="py-3 px-4">Jitters/Anxiety</td>
                    <td className="py-3 px-4 text-center text-neuro-yellow">Rare</td>
                    <td className="py-3 px-4 text-center">Common</td>
                    <td className="py-3 px-4 text-center">Common</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Tolerance Build-up</td>
                    <td className="py-3 px-4 text-center text-neuro-yellow">Slow</td>
                    <td className="py-3 px-4 text-center">Rapid</td>
                    <td className="py-3 px-4 text-center">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            PERFORMANCE BENEFITS
          </h2>
          <p className="text-white text-center max-w-3xl mx-auto mb-12">
            Kick Shot delivers measurable improvements across multiple performance domains,
            backed by scientific research and rigorous testing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">COGNITIVE ENHANCEMENT</h3>
              <ul className="text-white space-y-3">
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>42% improvement in sustained attention tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>37% increase in working memory capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>28% faster problem-solving speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>Improved mental clarity for up to 6 hours</span>
                </li>
              </ul>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">PHYSICAL PERFORMANCE</h3>
              <ul className="text-white space-y-3">
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>23% increase in endurance capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>18% improvement in reaction time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>Reduced perceived exertion during workouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>Enhanced mind-muscle connection</span>
                </li>
              </ul>
            </div>
            <div className="bg-asphalt-gray p-6">
              <h3 className="text-2xl font-trench text-toxic-cyan mb-4">SUSTAINED ENERGY</h3>
              <ul className="text-white space-y-3">
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>Smooth energy curve without spikes or crashes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>6+ hours of consistent performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>Minimal tolerance build-up with regular use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neuro-yellow mr-2">+</span>
                  <span>Gentle offset without rebound fatigue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            RESEARCH & DEVELOPMENT
          </h2>
          <p className="text-white text-center max-w-3xl mx-auto mb-12">
            Kick Shot is the result of years of research, development, and rigorous testing
            to create the ultimate cognitive enhancement formula.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[50%] w-1 bg-neuro-yellow"></div>
              
              <div className="relative z-10 mb-12">
                <div className="flex items-start">
                  <div className="bg-neuro-yellow text-blackout-black font-trench p-4 w-32 text-center">2021</div>
                  <div className="bg-blackout-black p-6 ml-8 flex-1">
                    <h3 className="text-xl font-trench text-toxic-cyan mb-2">CONCEPT DEVELOPMENT</h3>
                    <p className="text-white">
                      Initial research into neurochemical pathways and cognitive enhancement compounds.
                      Identification of key performance gaps in existing products.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mb-12">
                <div className="flex items-start">
                  <div className="bg-neuro-yellow text-blackout-black font-trench p-4 w-32 text-center">2022</div>
                  <div className="bg-blackout-black p-6 ml-8 flex-1">
                    <h3 className="text-xl font-trench text-toxic-cyan mb-2">FORMULA DEVELOPMENT</h3>
                    <p className="text-white">
                      Testing of over 200 compound combinations to identify optimal synergistic effects.
                      Development of proprietary time-release technology.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mb-12">
                <div className="flex items-start">
                  <div className="bg-neuro-yellow text-blackout-black font-trench p-4 w-32 text-center">2023</div>
                  <div className="bg-blackout-black p-6 ml-8 flex-1">
                    <h3 className="text-xl font-trench text-toxic-cyan mb-2">CLINICAL TESTING</h3>
                    <p className="text-white">
                      Rigorous testing with performance athletes and cognitive professionals.
                      Refinement of formula based on real-world performance data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start">
                  <div className="bg-neuro-yellow text-blackout-black font-trench p-4 w-32 text-center">2024</div>
                  <div className="bg-blackout-black p-6 ml-8 flex-1">
                    <h3 className="text-xl font-trench text-toxic-cyan mb-2">PRODUCTION OPTIMIZATION</h3>
                    <p className="text-white">
                      Finalization of production processes to ensure consistent quality and potency.
                      Development of precision packaging for optimal dosing and freshness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            EXPERT TESTIMONIALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-asphalt-gray p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blackout-black rounded-full flex items-center justify-center mr-4">
                  <span className="text-neuro-yellow font-trench">DR</span>
                </div>
                <div>
                  <h3 className="text-xl font-trench text-toxic-cyan">DR. SARAH CHEN</h3>
                  <p className="text-white text-sm">Neuroscientist, Stanford University</p>
                </div>
              </div>
              <p className="text-white">
                "The neurochemical approach in Kick Shot represents a significant advancement over traditional
                energy products. The balanced formula supports multiple cognitive pathways without the
                typical side effects we see with high-caffeine products."
              </p>
            </div>
            <div className="bg-asphalt-gray p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blackout-black rounded-full flex items-center justify-center mr-4">
                  <span className="text-neuro-yellow font-trench">MJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-trench text-toxic-cyan">MICHAEL JENKINS</h3>
                  <p className="text-white text-sm">Olympic Performance Coach</p>
                </div>
              </div>
              <p className="text-white">
                "I've worked with elite athletes for over 15 years, and Kick Shot delivers the most
                consistent performance enhancement I've seen. The sustained energy without jitters or
                crash makes it ideal for both training and competition."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-asphalt-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-trench text-neuro-yellow mb-8 text-center">
            SCIENTIFIC FAQ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">How does Kick Shot differ from caffeine?</h3>
              <p className="text-white">
                While caffeine primarily blocks adenosine receptors, Kick Shot's formula works on multiple
                neurochemical pathways simultaneously, providing more comprehensive cognitive enhancement
                and avoiding the single-pathway tolerance that develops with caffeine alone.
              </p>
            </div>
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">Is Kick Shot safe for daily use?</h3>
              <p className="text-white">
                Kick Shot is designed for regular use with minimal tolerance build-up. However, we recommend
                limiting intake to one packet per day, with occasional days off to maintain optimal sensitivity
                to the formula's effects.
              </p>
            </div>
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">How quickly does Kick Shot take effect?</h3>
              <p className="text-white">
                Initial effects begin within 15-20 minutes, with peak performance typically reached at 30-45
                minutes after consumption. The formula is designed to maintain this peak state for approximately
                4-6 hours before gradually tapering off.
              </p>
            </div>
            <div className="bg-blackout-black p-6">
              <h3 className="text-xl font-trench text-toxic-cyan mb-3">Are there any side effects?</h3>
              <p className="text-white">
                Kick Shot is formulated to minimize side effects. Some users may experience mild appetite
                suppression during the active period. As with any performance product, we recommend starting
                with half a packet to assess your individual response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blackout-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-trench text-neuro-yellow mb-6">
            EXPERIENCE THE SCIENCE
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Ready to experience the next generation of cognitive enhancement? Pre-order now
            to be among the first to try Kick Shot at exclusive early-backer pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/preorder" className="bg-neuro-yellow text-blackout-black font-trench uppercase py-3 px-8 hover:bg-toxic-cyan transition-colors">
              Pre-Order Now
            </Link>
            <Link href="/product" className="border border-neuro-yellow text-neuro-yellow font-trench uppercase py-3 px-8 hover:bg-neuro-yellow hover:text-blackout-black transition-colors">
              Product Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
