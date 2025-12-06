import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IncentivesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section
        className="relative min-h-[60vh] flex items-center justify-center px-10 py-20 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/desert.png')",
        }}
      >
        <div className="relative z-10 max-w-[800px] mx-auto">
          <h1
            style={{
              fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 500,
              fontStretch: 'expanded',
              color: '#ffffff',
              lineHeight: '1.15',
              letterSpacing: '0.5px',
              marginBottom: 'clamp(20px, 4vw, 32px)',
              textAlign: 'center',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            Incentives
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Performance-based rewards that align quality with compensation
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">Reward excellence</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed">
            Our incentive program ensures that companies get the highest quality annotations while experts are rewarded for their expertise and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="border border-gray-200 p-8 rounded-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Quality bonuses</h3>
            <p className="text-gray-600">
              Experts who consistently exceed quality thresholds earn additional compensation. Higher inter-annotator agreement = higher pay.
            </p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Speed incentives</h3>
            <p className="text-gray-600">
              Time-sensitive projects offer premium rates. Meet tight deadlines without sacrificing quality to earn accelerated compensation.
            </p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-3">Tier advancement</h3>
            <p className="text-gray-600">
              Top performers advance to higher tiers with increased base rates, priority access to premium projects, and exclusive opportunities.
            </p>
          </div>
        </div>

        <div className="bg-[#fafafa] p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-semibold mb-8">Expert tier system</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold">Bronze</h4>
                  <p className="text-gray-600">Entry-level experts</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">$150-200/hr</div>
                  <div className="text-sm text-gray-500">Base rate range</div>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Board certification verified</li>
                <li>• Standard project access</li>
                <li>• Weekly payouts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold">Silver</h4>
                  <p className="text-gray-600">Experienced annotators</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">$200-275/hr</div>
                  <div className="text-sm text-gray-500">Base rate range</div>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 90%+ quality score average</li>
                <li>• Priority project access</li>
                <li>• +10% quality bonus eligible</li>
                <li>• Bi-weekly payouts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-black">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold">Gold</h4>
                  <p className="text-gray-600">Elite expert annotators</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">$275-350/hr</div>
                  <div className="text-sm text-gray-500">Base rate range</div>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 95%+ quality score average</li>
                <li>• Exclusive high-value projects</li>
                <li>• +15% quality bonus eligible</li>
                <li>• Complex case consultation opportunities</li>
                <li>• Weekly or on-demand payouts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Company benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Guaranteed quality</h4>
              <p className="text-gray-600">
                Our incentive structure ensures experts are motivated to deliver the highest quality annotations. You only pay bonuses when quality exceeds thresholds.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Faster delivery</h4>
              <p className="text-gray-600">
                Time-sensitive projects benefit from speed incentives that motivate experts to prioritize urgent work without compromising accuracy.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Expert retention</h4>
              <p className="text-gray-600">
                The tier system keeps top performers engaged with your projects over time, building institutional knowledge and improving efficiency.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Transparent pricing</h4>
              <p className="text-gray-600">
                Clear, predictable costs with bonus structures defined upfront. No hidden fees or surprise charges - you know exactly what you're paying for.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-black text-white p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Custom incentive programs</h2>
          <p className="text-white/90 mb-6 max-w-[600px] mx-auto">
            Need a specialized incentive structure for your project? We can design custom programs that align with your specific quality requirements and timelines.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Discuss your needs
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
