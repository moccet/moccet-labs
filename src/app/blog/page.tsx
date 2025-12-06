import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of Medical AI: Why Expert Annotation Matters',
      date: 'December 1, 2024',
      author: 'Dr. Sarah Chen',
      category: 'Medical AI',
      excerpt:
        'As AI systems become more prevalent in healthcare, the quality of training data becomes paramount. Learn why board-certified physicians are essential for medical AI development.',
      readTime: '5 min read',
    },
    {
      title: 'HIPAA Compliance in Medical Data Annotation',
      date: 'November 28, 2024',
      author: 'Michael Rodriguez',
      category: 'Compliance',
      excerpt:
        'A comprehensive guide to maintaining HIPAA compliance while annotating medical data for AI training. Best practices for handling PHI securely.',
      readTime: '8 min read',
    },
    {
      title: 'Radiology AI: Improving Diagnostic Accuracy',
      date: 'November 20, 2024',
      author: 'Dr. James Park',
      category: 'Radiology',
      excerpt:
        'How radiologist-annotated datasets are enabling AI systems to detect diseases earlier and more accurately than ever before.',
      readTime: '6 min read',
    },
    {
      title: 'Quality Metrics for Medical Annotation Projects',
      date: 'November 15, 2024',
      author: 'Lisa Thompson',
      category: 'Best Practices',
      excerpt:
        'Understanding inter-annotator agreement, consensus workflows, and other key metrics that ensure high-quality medical datasets.',
      readTime: '7 min read',
    },
    {
      title: 'Pathology in the Age of AI: A Physician\'s Perspective',
      date: 'November 8, 2024',
      author: 'Dr. Emily Watson',
      category: 'Pathology',
      excerpt:
        'A board-certified pathologist shares insights on how AI is transforming digital pathology and what it means for the future of cancer diagnosis.',
      readTime: '10 min read',
    },
    {
      title: 'Building Scalable Medical Annotation Pipelines',
      date: 'November 1, 2024',
      author: 'David Kim',
      category: 'Engineering',
      excerpt:
        'Technical deep-dive into architecting HIPAA-compliant annotation workflows that can scale to millions of medical images.',
      readTime: '12 min read',
    },
  ];

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
            Blog & insights
          </h1>
          <p className="text-xl text-white/95 max-w-[600px] mx-auto leading-snug drop-shadow-lg">
            Expert perspectives on medical AI, data annotation, and the future of healthcare
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium">
              All posts
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Medical AI
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Radiology
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Pathology
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Best Practices
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Engineering
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-black transition-colors cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.author}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">
            More articles coming soon. Subscribe to our newsletter to stay updated.
          </p>
          <form className="max-w-[500px] mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
