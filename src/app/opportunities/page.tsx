import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OpportunitiesPage() {
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
            Opportunities for physicians
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Flexible work, competitive pay, and the chance to shape the future of medical AI
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">Why physicians choose moccet labs</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed">
            Join 12,000+ board-certified physicians who are earning competitive income while contributing to groundbreaking medical AI research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8">
            <div className="text-5xl font-semibold mb-3">$250/hr</div>
            <div className="text-gray-600">Average hourly rate</div>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-semibold mb-3">100%</div>
            <div className="text-gray-600">Remote work</div>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-semibold mb-3">Flexible</div>
            <div className="text-gray-600">Set your own schedule</div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">What you'll do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#fafafa] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Medical image annotation</h3>
              <p className="text-gray-600 mb-4">
                Review and label medical images to train AI diagnostic systems:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Radiology: X-rays, CT, MRI interpretation</li>
                <li>• Pathology: Slide annotation and classification</li>
                <li>• Dermatology: Skin lesion identification</li>
                <li>• Ophthalmology: Retinal imaging analysis</li>
              </ul>
            </div>

            <div className="bg-[#fafafa] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Clinical data validation</h3>
              <p className="text-gray-600 mb-4">
                Review and structure clinical information for AI models:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• EHR data extraction and classification</li>
                <li>• Clinical note summarization</li>
                <li>• Lab result interpretation</li>
                <li>• Diagnosis code validation</li>
              </ul>
            </div>

            <div className="bg-[#fafafa] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Model evaluation</h3>
              <p className="text-gray-600 mb-4">
                Assess AI model outputs for clinical accuracy:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Review AI-generated diagnoses</li>
                <li>• Identify false positives and negatives</li>
                <li>• Provide expert feedback on edge cases</li>
                <li>• Validate model performance</li>
              </ul>
            </div>

            <div className="bg-[#fafafa] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Research collaboration</h3>
              <p className="text-gray-600 mb-4">
                Contribute clinical expertise to cutting-edge research:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Participate in consensus meetings</li>
                <li>• Develop annotation guidelines</li>
                <li>• Co-author research publications</li>
                <li>• Present at medical AI conferences</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Specialties we're hiring</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              'Radiology',
              'Pathology',
              'Cardiology',
              'Dermatology',
              'Ophthalmology',
              'Neurology',
              'Oncology',
              'Emergency Medicine',
              'Internal Medicine',
              'Pediatrics',
              'Surgery',
              'Psychiatry',
            ].map((specialty) => (
              <div
                key={specialty}
                className="p-4 border border-gray-200 rounded-lg text-center hover:border-black transition-colors cursor-pointer"
              >
                {specialty}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-semibold mb-6">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Essential qualifications</h4>
              <ul className="space-y-2 text-white/90">
                <li>• MD or DO degree</li>
                <li>• Active medical license (US or international)</li>
                <li>• Board certification in your specialty</li>
                <li>• Minimum 3 years clinical experience</li>
                <li>• Strong attention to detail</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Preferred experience</h4>
              <ul className="space-y-2 text-white/90">
                <li>• Academic or research background</li>
                <li>• Experience with medical AI/ML</li>
                <li>• Published research papers</li>
                <li>• Teaching or mentorship experience</li>
                <li>• Multiple subspecialty certifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 max-w-[600px] mx-auto">
            Browse available roles and apply today. The application process takes less than 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/all-roles"
              className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-block"
            >
              View all roles
            </Link>
            <Link
              href="/payment"
              className="bg-white text-black border-2 border-black px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-block"
            >
              Learn about payment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
