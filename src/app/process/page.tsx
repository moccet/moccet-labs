import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ProcessPage() {
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
            Our process
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            From project kickoff to delivery, we ensure quality at every step
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-3">Project scoping</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                We begin with a detailed consultation to understand your medical AI project requirements. Our team works with you to define:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Project scope, timeline, and deliverables</li>
                <li>• Required medical specialties and expertise levels</li>
                <li>• Data annotation guidelines and quality standards</li>
                <li>• Compliance requirements (HIPAA, GDPR, etc.)</li>
                <li>• Budget and resource allocation</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-3">Expert matching</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                From our network of 12,000+ board-certified physicians, we carefully select experts who match your specific needs:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Specialty-specific clinical experience</li>
                <li>• Relevant subspecialty training</li>
                <li>• Track record of high-quality annotations</li>
                <li>• Availability and capacity to meet deadlines</li>
                <li>• Previous AI/ML project experience (if required)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-3">Training & calibration</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Before production work begins, we conduct comprehensive training to ensure consistency:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Detailed review of annotation guidelines</li>
                <li>• Platform and tool training</li>
                <li>• Practice annotation rounds with feedback</li>
                <li>• Inter-annotator agreement testing</li>
                <li>• Quality threshold validation</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">04</div>
              <h3 className="text-2xl font-semibold mb-3">Production annotation</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Experts begin annotating your medical data with ongoing quality monitoring:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Systematic data processing workflows</li>
                <li>• Real-time quality metrics tracking</li>
                <li>• Regular consensus meetings for edge cases</li>
                <li>• Continuous feedback and guideline refinement</li>
                <li>• Progress reporting and milestone tracking</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">05</div>
              <h3 className="text-2xl font-semibold mb-3">Quality assurance</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Multi-layer QA process ensures the highest annotation quality:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Random sample review by senior experts</li>
                <li>• Statistical quality control checks</li>
                <li>• Inter-annotator agreement analysis</li>
                <li>• Edge case escalation and resolution</li>
                <li>• Final validation before delivery</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">06</div>
              <h3 className="text-2xl font-semibold mb-3">Delivery & iteration</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Final annotated data is delivered with full documentation and support:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Secure data transfer to your systems</li>
                <li>• Comprehensive quality metrics report</li>
                <li>• Annotation methodology documentation</li>
                <li>• Post-delivery support for any issues</li>
                <li>• Capability for iterative refinement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center bg-[#fafafa] p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6 max-w-[600px] mx-auto">
            Let's discuss your medical AI project and how our expert network can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
