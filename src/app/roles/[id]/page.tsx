import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { Role } from '@/lib/types';

async function getRole(id: string): Promise<Role | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('roles')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export default async function RoleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const role = await getRole(params.id);

  if (!role) {
    notFound();
  }

  const rateRange = `$${role.rate_min}-$${role.rate_max}/hr`;
  const postedDate = new Date(role.posted_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{role.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="font-semibold text-lg text-gray-900">{rateRange}</span>
                <span>•</span>
                <span>Posted {postedDate}</span>
                <span>•</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {role.status}
                </span>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About this role</h2>
                <p className="text-gray-700 leading-relaxed">{role.description}</p>
              </div>

              {role.requirements && role.requirements.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {role.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Specialty</h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {role.specialty}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ApplicationForm role={role} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
