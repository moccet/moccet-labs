import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
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
            Get in touch
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Partner with us to access the world's largest network of medical AI experts
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Contact information</h2>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-black mb-2">General inquiries</h3>
                <a href="mailto:support@moccet.com" className="text-black hover:underline">
                  support@moccet.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Press & media</h3>
                <a href="mailto:press@moccet.com" className="text-black hover:underline">
                  press@moccet.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Business partnerships</h3>
                <a href="mailto:gtm@moccet.com" className="text-black hover:underline">
                  gtm@moccet.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-7 py-3.5 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
