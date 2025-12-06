import Link from 'next/link';

interface Avatar {
  id: number;
  color: string;
}

interface RoleCardProps {
  title: string;
  rate: string;
  postedTime: string;
  avatars: Avatar[];
  hiredCount: number;
  roleId?: string;
}

export default function RoleCard({
  title,
  rate,
  postedTime,
  avatars,
  hiredCount,
  roleId,
}: RoleCardProps) {
  const getAvatarColor = (color?: string) => {
    const colors = {
      pink: 'bg-pink-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      teal: 'bg-teal-500',
      orange: 'bg-orange-500',
    };
    return color && color in colors ? colors[color as keyof typeof colors] : 'bg-black';
  };

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-lg font-semibold text-black mb-2">{title}</div>
      <div className="text-[15px] text-gray-500 mb-4">{rate}</div>
      <div className="flex gap-3 text-sm text-gray-400 mb-5">
        <span>Contract</span>
        <span>•</span>
        <span>Posted {postedTime}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex">
            {avatars.map((avatar, index) => (
              <div
                key={avatar.id}
                className={`w-6 h-6 rounded-full ${getAvatarColor(
                  avatar.color
                )} text-white text-[10px] flex items-center justify-center ${
                  index > 0 ? '-ml-2' : ''
                } border-2 border-white font-semibold`}
              >
                {title.charAt(0)}
              </div>
            ))}
          </div>
          <span className="text-[13px] text-gray-400">
            {hiredCount} hired recently
          </span>
        </div>
        {roleId ? (
          <Link
            href={`/roles/${roleId}`}
            className="bg-gray-100 border-none px-5 py-2 rounded-lg text-sm font-medium cursor-pointer text-black hover:bg-gray-200 transition-colors inline-block"
          >
            Apply
          </Link>
        ) : (
          <button className="bg-gray-100 border-none px-5 py-2 rounded-lg text-sm font-medium cursor-pointer text-black hover:bg-gray-200 transition-colors">
            Apply
          </button>
        )}
      </div>
    </div>
  );
}
