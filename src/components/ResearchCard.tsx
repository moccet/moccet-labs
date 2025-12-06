import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  link?: string;
}

export default function ResearchCard({
  title,
  description,
  icon,
  gradient,
  link,
}: ResearchCardProps) {
  const card = (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 md:p-10 ${gradient} transition-transform hover:scale-[1.02] cursor-pointer group`}
    >
      <div className="relative z-10">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 leading-relaxed">{description}</p>
      </div>

      {/* Subtle overlay effect on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
    </div>
  );

  if (link) {
    return <Link href={link}>{card}</Link>;
  }

  return card;
}
