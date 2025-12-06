import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeaderboardTable from '@/components/LeaderboardTable';
import SpecialtyCard from '@/components/SpecialtyCard';

export default function ApexPage() {
  // Overall leaderboard data
  const overallLeaderboard = [
    { rank: 1, name: 'GPT 5', company: 'OpenAI', score: 67.0, errorMargin: 2.1 },
    { rank: 2, name: 'Gemini 3 Pro', company: 'Google', score: 65.4, errorMargin: 1.8 },
    { rank: 3, name: 'Grok 4', company: 'xAI', score: 64.2, errorMargin: 2.3 },
    { rank: 4, name: 'o3', company: 'OpenAI', score: 63.8, errorMargin: 1.9 },
    { rank: 5, name: 'Opus 4.5', company: 'Anthropic', score: 63.1, errorMargin: 2.0 },
    { rank: 6, name: 'Sonnet 4.5', company: 'Anthropic', score: 62.1, errorMargin: 1.7 },
    { rank: 7, name: 'Gemini 2.5 Flash', company: 'Google', score: 61.5, errorMargin: 2.2 },
    { rank: 8, name: 'GPT OSS', company: 'OpenAI', score: 59.8, errorMargin: 1.6 },
  ];

  // Specialty-specific data
  const generalPractitioner = [
    { name: 'Sonnet 4.5', company: 'Anthropic', score: 62.1 },
    { name: 'GPT 5', company: 'OpenAI', score: 62.0 },
    { name: 'Grok 4', company: 'xAI', score: 59.3 },
  ];

  const radiologyExpert = [
    { name: 'GPT 5', company: 'OpenAI', score: 71.2 },
    { name: 'Gemini 3 Pro', company: 'Google', score: 68.9 },
    { name: 'o3', company: 'OpenAI', score: 66.4 },
  ];

  const pathologySpecialist = [
    { name: 'Gemini 3 Pro', company: 'Google', score: 69.8 },
    { name: 'GPT 5', company: 'OpenAI', score: 68.2 },
    { name: 'Opus 4.5', company: 'Anthropic', score: 65.7 },
  ];

  const cardiologyAnnotator = [
    { name: 'Grok 4', company: 'xAI', score: 70.1 },
    { name: 'GPT 5', company: 'OpenAI', score: 68.5 },
    { name: 'Gemini 3 Pro', company: 'Google', score: 67.3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-10 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Medical AI Productivity Index
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          APEX evaluates frontier AI models across four critical medical roles:
          General Practitioner, Radiology Expert, Pathology Specialist, and
          Cardiology Annotator. Our benchmark measures real-world medical task
          performance using validated datasets from leading medical institutions.
        </p>
      </section>

      {/* Overall Leaderboard */}
      <section className="px-10 pb-16 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Overall Rankings
          </h2>
          <p className="text-gray-600">
            Aggregated performance across all medical specialties
          </p>
        </div>
        <LeaderboardTable models={overallLeaderboard} />
      </section>

      {/* Specialty Breakdowns */}
      <section className="px-10 pb-20 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Specialty Performance
          </h2>
          <p className="text-gray-600">
            Detailed rankings for each medical role
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecialtyCard
            title="General Practitioner (MD)"
            models={generalPractitioner}
          />
          <SpecialtyCard
            title="Radiology Expert"
            models={radiologyExpert}
          />
          <SpecialtyCard
            title="Pathology Specialist"
            models={pathologySpecialist}
          />
          <SpecialtyCard
            title="Cardiology Annotator"
            models={cardiologyAnnotator}
          />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-10 pb-20 max-w-6xl mx-auto">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About APEX
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              The Medical AI Productivity Index (APEX) is developed in collaboration
              with experts from University of Pennsylvania, Northwestern University,
              Cornell Medical Center, Brigham and Women's Hospital, and Mount Sinai
              Health System.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our benchmark evaluates AI models on authentic medical tasks including
              diagnosis support, medical imaging analysis, pathology review, and
              clinical documentation. All scores represent performance on validated
              test sets with error margins calculated using bootstrap sampling.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
