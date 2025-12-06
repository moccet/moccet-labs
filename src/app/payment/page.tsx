import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PaymentPage() {
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
            Payment & compensation
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Transparent rates, flexible payouts, and competitive compensation
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">How payment works</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed">
            We believe in fair, transparent compensation for medical expertise. Here's everything you need to know about getting paid on moccet labs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-[#fafafa] rounded-lg">
            <div className="text-5xl font-semibold mb-3">$150-350</div>
            <div className="text-gray-600 mb-2">Hourly rate range</div>
            <div className="text-sm text-gray-500">Based on specialty and tier</div>
          </div>
          <div className="text-center p-8 bg-[#fafafa] rounded-lg">
            <div className="text-5xl font-semibold mb-3">$4.2M+</div>
            <div className="text-gray-600 mb-2">Daily payouts</div>
            <div className="text-sm text-gray-500">Distributed to physicians</div>
          </div>
          <div className="text-center p-8 bg-[#fafafa] rounded-lg">
            <div className="text-5xl font-semibold mb-3">24-48hr</div>
            <div className="text-gray-600 mb-2">Payment processing</div>
            <div className="text-sm text-gray-500">For standard payouts</div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Rate structure</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Base hourly rate</h4>
                  <p className="text-gray-600">
                    Your base rate depends on your specialty, experience level, and performance tier. Rates are transparently displayed before you accept any project.
                  </p>
                </div>
                <div className="text-2xl font-semibold whitespace-nowrap">$150-350/hr</div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Quality bonuses</h4>
                  <p className="text-gray-600">
                    Earn up to 15% more for consistently high-quality work that exceeds our accuracy and agreement thresholds.
                  </p>
                </div>
                <div className="text-2xl font-semibold whitespace-nowrap">+10-15%</div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Rush project premium</h4>
                  <p className="text-gray-600">
                    Time-sensitive projects that require fast turnaround offer premium rates, typically 25-50% above standard rates.
                  </p>
                </div>
                <div className="text-2xl font-semibold whitespace-nowrap">+25-50%</div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Complex case consultation</h4>
                  <p className="text-gray-600">
                    Provide expert consultation on difficult cases or serve as a gold-standard reviewer for additional compensation.
                  </p>
                </div>
                <div className="text-2xl font-semibold whitespace-nowrap">$300-500/hr</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-semibold mb-8">Payout options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Direct deposit (ACH)</h4>
              <p className="text-gray-600 mb-4">
                The fastest and most common payout method. Link your bank account for automatic transfers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Available in all 50 US states</li>
                <li>• 24-48 hour processing time</li>
                <li>• No fees</li>
                <li>• Automatic tax documentation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Wire transfer</h4>
              <p className="text-gray-600 mb-4">
                International wire transfers for physicians outside the United States.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Available worldwide</li>
                <li>• 3-5 business day processing</li>
                <li>• Bank fees may apply</li>
                <li>• Multi-currency support</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">PayPal</h4>
              <p className="text-gray-600 mb-4">
                Quick and convenient for international physicians with PayPal accounts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Available in 200+ countries</li>
                <li>• Same-day to 24-hour processing</li>
                <li>• PayPal fees apply (2.9% + $0.30)</li>
                <li>• Instant access to funds</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Check (mail)</h4>
              <p className="text-gray-600 mb-4">
                Traditional paper check mailed to your address of record.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• US addresses only</li>
                <li>• 7-10 business day delivery</li>
                <li>• No fees</li>
                <li>• Requires manual deposit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Payout frequency</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-black text-white px-4 py-2 rounded font-semibold text-sm">
                WEEKLY
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Standard payout (Default)</h4>
                <p className="text-gray-600">
                  Earnings from Monday-Sunday are processed the following Friday. Available to all physicians.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-gray-400 text-white px-4 py-2 rounded font-semibold text-sm">
                BI-WEEKLY
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Silver tier and above</h4>
                <p className="text-gray-600">
                  Earnings paid every two weeks on the 1st and 15th of the month. Helps with larger payout amounts and tax planning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-yellow-600 text-white px-4 py-2 rounded font-semibold text-sm">
                ON-DEMAND
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Gold tier only</h4>
                <p className="text-gray-600">
                  Request payouts at any time once you've reached $1,000 in earnings. Funds processed within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Tax information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">US physicians (W-9 / 1099)</h4>
              <p className="text-white/90 mb-3">
                As an independent contractor, you'll receive a 1099-NEC form at year-end for tax filing purposes.
              </p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Complete W-9 form during onboarding</li>
                <li>• 1099-NEC issued by January 31st</li>
                <li>• Quarterly estimated tax payments recommended</li>
                <li>• Deduct business expenses (home office, equipment)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">International physicians (W-8BEN)</h4>
              <p className="text-white/90 mb-3">
                International contractors complete W-8BEN form and may be subject to tax withholding based on treaty status.
              </p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Complete W-8BEN form during onboarding</li>
                <li>• Tax withholding varies by country (0-30%)</li>
                <li>• US tax treaty benefits may apply</li>
                <li>• Consult local tax professional for guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
