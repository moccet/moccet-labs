import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CareersPage() {
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
            Join our team
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Help us build the future of medical AI at moccet labs
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">Work with us</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed">
            We're a fast-growing team on a mission to democratize access to medical expertise for AI development. Join us in building tools that will transform healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border border-gray-200 rounded-lg p-8 bg-white">
            <h3 className="text-xl font-semibold mb-3">Fast-paced growth</h3>
            <p className="text-gray-600">
              Join a rapidly scaling startup that's processing millions of medical annotations and working with leading AI companies.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8 bg-white">
            <h3 className="text-xl font-semibold mb-3">Impact healthcare</h3>
            <p className="text-gray-600">
              Your work directly contributes to AI systems that will improve patient outcomes and save lives around the world.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8 bg-white">
            <h3 className="text-xl font-semibold mb-3">Cutting-edge tech</h3>
            <p className="text-gray-600">
              Work with the latest technologies in AI/ML, cloud infrastructure, and medical informatics.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Open positions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Senior Full-Stack Engineer</h4>
                  <div className="text-sm text-gray-500">Engineering • San Francisco, CA / Remote</div>
                </div>
                <a
                  href="mailto:gtm@moccet.com?subject=Application: Senior Full-Stack Engineer"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Apply now
                </a>
              </div>
              <p className="text-gray-600">
                Build scalable web applications for medical data annotation. React, Node.js, PostgreSQL, TypeScript.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Machine Learning Engineer</h4>
                  <div className="text-sm text-gray-500">Engineering • San Francisco, CA / Remote</div>
                </div>
                <a
                  href="mailto:gtm@moccet.com?subject=Application: Machine Learning Engineer"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Apply now
                </a>
              </div>
              <p className="text-gray-600">
                Develop ML models for quality assurance, annotation automation, and medical AI evaluation. PyTorch, TensorFlow.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Medical Project Manager</h4>
                  <div className="text-sm text-gray-500">Operations • San Francisco, CA / Remote</div>
                </div>
                <a
                  href="mailto:gtm@moccet.com?subject=Application: Medical Project Manager"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Apply now
                </a>
              </div>
              <p className="text-gray-600">
                Coordinate medical annotation projects between clients and physician experts. Clinical background preferred.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Enterprise Sales Executive</h4>
                  <div className="text-sm text-gray-500">Sales • San Francisco, CA / Remote</div>
                </div>
                <a
                  href="mailto:gtm@moccet.com?subject=Application: Enterprise Sales Executive"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Apply now
                </a>
              </div>
              <p className="text-gray-600">
                Sell medical AI data services to pharma, medical device, and healthcare AI companies. B2B SaaS experience required.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Product Designer</h4>
                  <div className="text-sm text-gray-500">Design • San Francisco, CA / Remote</div>
                </div>
                <a
                  href="mailto:gtm@moccet.com?subject=Application: Product Designer"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Apply now
                </a>
              </div>
              <p className="text-gray-600">
                Design intuitive annotation tools and physician workflows. Experience with medical software a plus.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-semibold mb-1">DevOps Engineer</h4>
                  <div className="text-sm text-gray-500">Engineering • San Francisco, CA / Remote</div>
                </div>
                <a
                  href="mailto:gtm@moccet.com?subject=Application: DevOps Engineer"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Apply now
                </a>
              </div>
              <p className="text-gray-600">
                Manage HIPAA-compliant cloud infrastructure. AWS, Kubernetes, Terraform, CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-semibold mb-8">Benefits & perks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">Health & wellness</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive medical, dental, and vision insurance</li>
                <li>• Mental health and wellness benefits</li>
                <li>• Flexible time off policy</li>
                <li>• Home office stipend for remote workers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Financial benefits</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive salary and equity packages</li>
                <li>• 401(k) with company matching</li>
                <li>• Performance bonuses</li>
                <li>• Commuter benefits (SF office)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Professional growth</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Learning & development budget</li>
                <li>• Conference attendance opportunities</li>
                <li>• Mentorship programs</li>
                <li>• Career advancement pathways</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Work environment</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Remote-first culture</li>
                <li>• Modern SF office with amenities</li>
                <li>• Regular team events and offsites</li>
                <li>• Collaborative, mission-driven team</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Don't see the right role?</h2>
          <p className="text-gray-600 mb-6 max-w-[600px] mx-auto">
            We're always looking for talented people to join our team. Send us your resume and let us know what you're interested in.
          </p>
          <a
            href="mailto:gtm@moccet.com?subject=General Application"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
