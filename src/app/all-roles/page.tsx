import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Role } from '@/lib/types';

async function getAllRoles(): Promise<Role[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('roles')
    .select('*')
    .eq('status', 'active')
    .order('posted_at', { ascending: false });

  if (error || !data) {
    console.error('Error fetching roles:', error);
    return [];
  }

  return data;
}

export default async function AllRolesPage() {
  const roles = await getAllRoles();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-10 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse All Roles</h1>
          <p className="text-gray-600">
            Explore available positions for medical AI experts and specialists
          </p>
        </div>

        {roles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No active roles available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => {
              const rateRange = `$${role.rate_min}-$${role.rate_max}/hr`;
              const postedDate = new Date(role.posted_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              });

              return (
                <Link
                  key={role.id}
                  href={`/roles/${role.id}`}
                  className="block border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{role.title}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {role.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{role.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="font-semibold text-lg text-gray-900">{rateRange}</span>
                    <span>•</span>
                    <span>Posted {postedDate}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {role.specialty}
                    </span>
                    {role.requirements && role.requirements.length > 0 && (
                      <span className="text-sm text-gray-500">
                        {role.requirements.length} requirement{role.requirements.length !== 1 ? 's' : ''}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-blue-600 font-medium text-sm hover:text-blue-700">
                      View details & apply →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
