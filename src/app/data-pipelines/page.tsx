import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DataPipelinesPage() {
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
            Data pipelines
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Seamless integration of expert medical annotation into your ML workflows
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-6">Enterprise-ready infrastructure</h2>
          <p className="text-xl text-gray-600 max-w-[800px] leading-relaxed">
            Our data pipelines integrate seamlessly with your existing ML infrastructure, providing scalable, secure, and efficient medical data annotation workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#fafafa] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">API-first design</h3>
            <p className="text-gray-600 mb-4">
              RESTful and GraphQL APIs for programmatic access to our annotation platform:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Upload medical images and data programmatically</li>
              <li>• Define annotation tasks and guidelines via API</li>
              <li>• Retrieve annotations in real-time</li>
              <li>• Webhook notifications for task completion</li>
              <li>• Batch processing and bulk operations</li>
            </ul>
          </div>

          <div className="bg-[#fafafa] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Cloud integration</h3>
            <p className="text-gray-600 mb-4">
              Native integrations with major cloud platforms:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• AWS S3, GCP Cloud Storage, Azure Blob Storage</li>
              <li>• Direct integration with SageMaker, Vertex AI</li>
              <li>• Support for DICOM servers and PACS systems</li>
              <li>• VPC peering and private endpoints</li>
              <li>• Data residency compliance options</li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Pipeline workflow</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Data ingestion</h4>
                <p className="text-gray-600">
                  Automatically ingest medical data from your cloud storage, PACS systems, or via API. Support for DICOM, NIFTI, PNG, JPEG, and other medical imaging formats.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Task distribution</h4>
                <p className="text-gray-600">
                  Intelligent task routing to qualified medical experts based on specialty, availability, and historical performance. Automated workload balancing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Expert annotation</h4>
                <p className="text-gray-600">
                  Board-certified physicians annotate data using specialized medical imaging tools. Real-time quality checks and consensus workflows for complex cases.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Quality validation</h4>
                <p className="text-gray-600">
                  Multi-layer QA including statistical validation, inter-annotator agreement analysis, and senior expert review for high-stakes annotations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                5
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Data delivery</h4>
                <p className="text-gray-600">
                  Annotated data delivered back to your systems via API, webhook, or direct cloud storage write. Supports JSON, COCO, Pascal VOC, and custom formats.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Technical features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Security</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• SOC 2 Type II certified</li>
                <li>• HIPAA compliant infrastructure</li>
                <li>• End-to-end encryption</li>
                <li>• Role-based access control</li>
                <li>• Audit logging</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Scalability</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Auto-scaling annotation workforce</li>
                <li>• Parallel processing pipelines</li>
                <li>• Load balancing</li>
                <li>• High-throughput APIs</li>
                <li>• Global CDN delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Monitoring</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Real-time dashboards</li>
                <li>• Quality metrics tracking</li>
                <li>• SLA monitoring</li>
                <li>• Custom alerting</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
