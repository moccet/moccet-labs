import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MedicalDataPage() {
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
            Medical data labeling
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            High-quality medical data annotation powered by board-certified physicians
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">Expert medical annotation</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed">
            Our network of 12,000+ board-certified physicians provides the highest quality medical data annotation for AI training. From radiology to pathology, we cover all major medical specialties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold mb-3">Medical imaging</h3>
            <p className="text-gray-600">
              Expert annotation of X-rays, CT scans, MRIs, ultrasounds, and pathology slides by specialty-trained radiologists and pathologists.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Clinical data</h3>
            <p className="text-gray-600">
              Structured data extraction from EHRs, lab results, clinical notes, and medical records with full HIPAA compliance.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-3">Specialized datasets</h3>
            <p className="text-gray-600">
              Custom medical datasets for rare diseases, specific anatomical regions, or specialized medical AI applications.
            </p>
          </div>
        </div>

        <div className="bg-[#fafafa] p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Annotation capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Image segmentation and classification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Bounding box annotation for object detection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Text extraction and NLP labeling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Video annotation for surgical procedures</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Multi-label classification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Quality assurance and validation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">Custom annotation workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">✓</span>
                <span className="text-gray-700">HIPAA-compliant data handling</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
