'use client';

import Link from 'next/link';
import { useAuth } from '@/components/AuthProvider';
import { useState } from 'react';

export default function Navigation() {
  const { user, profile, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="px-10 py-4 flex items-center justify-between border-b border-gray-200 bg-white">
      <Link href="/" className="text-2xl font-black text-black tracking-tight hover:opacity-80 transition-opacity">
        moccet-labs
      </Link>

      <nav className="hidden md:flex items-center gap-9">
        <Link
          href="/apex"
          className="text-gray-500 text-[15px] font-normal hover:text-black transition-colors"
        >
          APEX
        </Link>
        <Link
          href="/research"
          className="text-gray-500 text-[15px] font-normal hover:text-black transition-colors"
        >
          Research
        </Link>
        <Link
          href="/all-roles"
          className="text-gray-500 text-[15px] font-normal hover:text-black transition-colors"
        >
          Browse Roles
        </Link>
        <a
          href="#blog"
          className="text-gray-500 text-[15px] font-normal hover:text-black transition-colors"
        >
          Blog
        </a>
      </nav>

      <div className="flex gap-3 items-center">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-transparent border-none text-black text-[15px] cursor-pointer px-0 py-2 font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              {profile?.full_name || user.email}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                <Link
                  href="/dashboard/applications"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Applications
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="bg-transparent border-none text-black text-[15px] cursor-pointer px-0 py-2 font-medium hover:opacity-70 transition-opacity"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="bg-black text-white text-[15px] px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
