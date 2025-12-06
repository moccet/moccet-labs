import ModelRow from './ModelRow';

export default function BenchmarkSection() {
  const models = [
    { name: 'Sonnet 4.5', score: 62.1, gradient: 'yellow' as const },
    { name: 'GPT 5', score: 62.0, gradient: 'yellow' as const },
    {
      name: 'Grok 4',
      score: 59.3,
      gradient: 'black' as const,
      iconColor: '#000',
    },
    { name: 'Gemini 2.5 Flash', score: 58.9, gradient: 'multi' as const },
    { name: 'GPT OSS', score: 58.6, gradient: 'blue' as const },
    { name: 'o3 Pro', score: 57.7, gradient: 'blue' as const },
    {
      name: 'Grok 3',
      score: 57.1,
      gradient: 'black' as const,
      iconColor: '#000',
    },
    { name: 'o3', score: 56.2, gradient: 'blue' as const },
  ];

  return (
    <section className="px-10 py-20 bg-[#fafafa]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[32px] font-semibold text-center mb-4">
          General Practitioner (MD) Benchmark
        </h2>
        <p className="text-center text-gray-500 mb-12 text-base">
          AI Benchmark created by experts from University of Pennsylvania,
          Northwestern, Cornell, Brigham & Women&apos;s, Mount Sinai
        </p>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          {models.map((model, index) => (
            <ModelRow
              key={index}
              name={model.name}
              score={model.score}
              gradient={model.gradient}
              iconColor={model.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
