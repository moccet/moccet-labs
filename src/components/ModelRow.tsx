interface ModelRowProps {
  name: string;
  score: number;
  gradient: 'yellow' | 'blue' | 'multi' | 'purple' | 'black';
  iconColor?: string;
}

export default function ModelRow({
  name,
  score,
  gradient,
  iconColor = '#6b7280',
}: ModelRowProps) {
  const getGradientClass = (gradient: string) => {
    const gradients = {
      yellow: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
      blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
      multi: 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400',
      purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
      black: 'bg-black',
    };
    return gradients[gradient as keyof typeof gradients] || gradients.yellow;
  };

  return (
    <div className="flex items-center gap-4 mb-3.5">
      <div className="flex items-center gap-2 w-[120px]">
        <div
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: iconColor }}
        />
        <span className="text-sm text-gray-700">{name}</span>
      </div>

      <div className="flex-1 h-6 bg-gray-100 rounded overflow-hidden">
        <div
          className={`h-full rounded ${getGradientClass(gradient)}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="w-[50px] text-right text-sm text-gray-700 font-medium">
        {score}%
      </div>
    </div>
  );
}
