import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GuidePage() {
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
            Company guide
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Everything you need to know about working with moccet labs
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">Getting started</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed mb-8">
            Partner with the world's largest network of medical AI experts. Our platform connects you with board-certified physicians who can help train, validate, and improve your healthcare AI models.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Step 1: Define your project</h3>
            <p className="text-gray-600 mb-4">
              Start by outlining your medical AI project requirements. Consider:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• The medical specialty or specialties you need (radiology, pathology, cardiology, etc.)</li>
              <li>• Type of data annotation required (image segmentation, classification, labeling)</li>
              <li>• Dataset size and project timeline</li>
              <li>• Quality assurance and validation requirements</li>
              <li>• HIPAA compliance and data security needs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Step 2: Connect with our team</h3>
            <p className="text-gray-600 mb-4">
              Reach out to discuss your project. We'll help you:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• Understand the scope and requirements</li>
              <li>• Match you with qualified medical experts</li>
              <li>• Establish project timelines and milestones</li>
              <li>• Set up secure data transfer protocols</li>
              <li>• Define quality metrics and success criteria</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Step 3: Onboard your experts</h3>
            <p className="text-gray-600 mb-4">
              We handle the entire onboarding process:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• Credential verification (board certifications, medical licenses)</li>
              <li>• Training on your specific annotation guidelines</li>
              <li>• Platform and tool familiarization</li>
              <li>• NDA and compliance documentation</li>
              <li>• Test annotation rounds to ensure quality</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Step 4: Monitor and scale</h3>
            <p className="text-gray-600 mb-4">
              Track progress and scale as needed:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• Real-time dashboard for project tracking</li>
              <li>• Quality metrics and inter-annotator agreement scores</li>
              <li>• Flexible scaling to add more experts as needed</li>
              <li>• Regular check-ins and progress reports</li>
              <li>• Continuous quality assurance and feedback loops</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 bg-[#fafafa] p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Why choose moccet labs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">Verified expertise</h4>
              <p className="text-gray-600">
                All experts are board-certified physicians with active medical licenses and years of clinical experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Quality assurance</h4>
              <p className="text-gray-600">
                Multi-level QA process with inter-annotator agreement tracking and expert review protocols.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">HIPAA compliance</h4>
              <p className="text-gray-600">
                Full HIPAA compliance with secure data handling, encrypted transfers, and audit trails.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Scalable workforce</h4>
              <p className="text-gray-600">
                Access to 12,000+ medical experts across all specialties. Scale up or down as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
