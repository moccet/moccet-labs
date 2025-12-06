import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchCard from '@/components/ResearchCard';
import Link from 'next/link';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-10 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          moccet labs powers medical AI advancement through expert physicians and
          frontier clinical data
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Partnering with leading AI labs and healthcare institutions to develop
          the next generation of medical AI systems. Trusted by top AI companies
          and medical centers worldwide.
        </p>
        <Link
          href="/apex"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          Explore APEX Benchmark
        </Link>
      </section>

      {/* Key Value Props */}
      <section className="px-10 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">12.3k+</div>
            <div className="text-gray-600">Board-certified physicians</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500k+</div>
            <div className="text-gray-600">Clinical annotations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
            <div className="text-gray-600">Medical specialties</div>
          </div>
        </div>
      </section>

      {/* Featured Research Areas */}
      <section className="px-10 pb-16 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Research Areas
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Advancing medical AI through rigorous evaluation, expert annotation,
            and specialized model development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/apex"
            className="block border border-gray-200 rounded-lg p-6 bg-white"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Medical AI Benchmarks
            </h3>
            <p className="text-gray-600 leading-relaxed">
              APEX evaluates frontier models across clinical specialties, measuring real-world medical task performance with validated datasets from leading institutions.
            </p>
          </Link>

          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Clinical Data Labeling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High-quality medical annotation by board-certified physicians across imaging, clinical notes, and structured health data.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Medical LLM Training
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Expert-validated training data for medical language models, covering diagnosis, treatment planning, and clinical documentation.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Specialty Models
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Domain-specific AI development for radiology, pathology, cardiology, and other medical specialties with subspecialty expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Engagement Model */}
      <section className="px-10 pb-16 max-w-6xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Dual Engagement Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Talent Network
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Access to 12,300+ board-certified physicians across multiple
                specialties. Our rigorous vetting process ensures only the top
                medical experts work on your AI projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Frontier Medical Data
              </h3>
              <p className="text-gray-700 leading-relaxed">
                High-quality, expert-annotated datasets across all medical
                modalities: imaging, text, audio, video, and structured clinical
                data. Built for modern AI training pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-10 pb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Medical Data Capabilities
        </h2>

        <div className="space-y-6">
          {/* Modalities */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Data Modalities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Medical Imaging', 'Clinical Text', 'Audio Records', 'Video Consultations', 'Structured EHR'].map(
                (modality) => (
                  <div
                    key={modality}
                    className="bg-gray-50 rounded-lg p-4 text-center text-sm font-medium text-gray-700"
                  >
                    {modality}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Specialties */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Medical Specialties
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Radiology', 'Pathology', 'Cardiology', 'Oncology', 'Dermatology', 'Primary Care', 'Emergency Medicine', 'Surgery'].map(
                (specialty) => (
                  <div
                    key={specialty}
                    className="bg-gray-50 rounded-lg p-4 text-center text-sm font-medium text-gray-700"
                  >
                    {specialty}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-10 pb-20 max-w-6xl mx-auto">
        <div className="border border-gray-200 rounded-xl p-12 text-center bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner with moccet labs
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading AI companies in building the future of medical AI with
            our expert network and frontier clinical data.
          </p>
          <Link
            href="/all-roles"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
