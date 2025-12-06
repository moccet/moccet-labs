import RoleCard from './RoleCard';
import { createClient } from '@/lib/supabase/server';
import { Role } from '@/lib/types';

function getTimeAgo(date: string): string {
  const now = new Date();
  const posted = new Date(date);
  const diffMs = now.getTime() - posted.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  return 'Just now';
}

async function getLatestRoles(): Promise<Role[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('roles')
    .select('*')
    .eq('status', 'active')
    .order('posted_at', { ascending: false })
    .limit(6);

  if (error || !data) {
    console.error('Error fetching roles:', error);
    return [];
  }

  return data;
}

export default async function LatestRoles() {
  const roles = await getLatestRoles();

  // Generate mock avatars based on role title
  const generateAvatars = (title: string) => {
    const colors = ['pink', 'blue', 'green', 'yellow', 'orange', 'purple', 'teal'];
    const count = Math.floor(Math.random() * 3) + 1;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  };

  return (
    <section className="px-10 py-20 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-black">Latest roles</h2>
        <a
          href="/all-roles"
          className="text-[15px] text-black no-underline flex items-center gap-1 font-medium hover:underline"
        >
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roles.length === 0 ? (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">No roles available at the moment. Check back soon!</p>
          </div>
        ) : (
          roles.map((role) => (
            <RoleCard
              key={role.id}
              roleId={role.id}
              title={role.title}
              rate={`$${role.rate_min}-$${role.rate_max}/hr`}
              postedTime={getTimeAgo(role.posted_at)}
              avatars={generateAvatars(role.title)}
              hiredCount={Math.floor(Math.random() * 300) + 50}
            />
          ))
        )}
      </div>
    </section>
  );
}
