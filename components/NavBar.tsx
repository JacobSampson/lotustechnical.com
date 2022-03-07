/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <header className="shadow-sm">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a href="/">
              <img
                className="h-12 hover:scale-105 transition-all ease-in-out"
                src="/images/logo.png"
                alt={'Formulast Logo'}
              />
            </a>
          </div>
          {open && (
            <nav
              className="
            space-x-8 text-sm font-medium md:flex

            relative
            "
            >
              {[
                { label: 'Home', link: '/' },
                { label: 'Clients', link: 'clients/' },
                { label: 'Job Seekers', link: '/job-seekers' },
                { label: 'Current Openings', link: '/current-openings' },
                { label: 'Employment Forms', link: '/employment-forms' },
              ].map(({ label, link }) => (
                <Link href={link}>
                  <a
                    className={`
                    text-gray-500
                    absolute

                    hover:bg-gray-700 hover:text-white
                      px-3 py-2
                      rounded-md
                      text-base
                      font-medium

                      ${router.pathname === link ? '' : ''}
                    `}
                    key={link}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </nav>
          )}

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a
              className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
              href=""
            >
              Log in
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="
                p-2 rounded-lg
                text-gray-600 bg-gray-100
                transition-all ease-in-out
                hover:bg-gray-300"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
