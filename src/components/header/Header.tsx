'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold text-gray-800'>
              MyApp
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex md:hidden'>
            <button
              id='mobile-menu-button'
              className='text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={handleMobileMenuToggle}
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className='hidden md:flex space-x-4'>
            <Link
              href='/'
              className='text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium'
            >
              <>Home</>
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium'
            >
              <>About</>
            </Link>
            <Link
              href='/services'
              className='text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium'
            >
              <>Services</>
            </Link>
            <Link
              href='/contact'
              className='text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium'
            >
              <>Contact</>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id='mobile-menu' className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              href='/'
              className='block text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-base font-medium'
            >
              <>Home</>
            </Link>
            <Link
              href='/about'
              className='block text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-base font-medium'
            >
              <>About</>
            </Link>
            <Link
              href='/services'
              className='block text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-base font-medium'
            >
              <>Services</>
            </Link>
            <Link
              href='/contact'
              className='block text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-base font-medium'
            >
              <>Contact</>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
