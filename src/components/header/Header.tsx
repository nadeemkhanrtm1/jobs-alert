'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <nav className='max-w-7xl mx-auto py-2 bg-white shadow-md rounded-md sticky top-0'>
      <div className='container flex flex-wrap items-center justify-between mx-auto text-slate-800'>
        <Link
          href='/'
          className='mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold'
        >
          Home Jobs
        </Link>

        <div className='hidden lg:block'>
          <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            <li className='flex items-center p-1 text-sm gap-x-2 text-slate-600'>
              <Link href='/work-from-home-jobs' className='flex items-center'>
                Work From Home Jobs
              </Link>
            </li>
            <li className='flex items-center p-1 text-sm gap-x-2 text-slate-600'>
              <Link href='/freshers-jobs' className='flex items-center'>
                Freshers Jobs (passed out 2023, 2024)
              </Link>
            </li>
            <li className='flex items-center p-1 text-sm gap-x-2 text-slate-600'>
              <Link href='#' className='flex items-center'>
                Jobs for women
              </Link>
            </li>
          </ul>
        </div>
        <button
          className='relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden'
          type='button'
        >
          <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
