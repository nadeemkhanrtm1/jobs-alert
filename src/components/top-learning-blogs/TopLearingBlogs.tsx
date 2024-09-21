import React from 'react';

const TopLearningBlogs: React.FC = () => {
  return (
    <div className='bg-gray-900 text-white py-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-lg font-bold text-center'>Top Learning Blogs</h2>
        <ul className='mt-4 flex justify-center space-x-6'>
          <li>
            <a
              href='#'
              className='hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              JavaScript Essentials
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Tips & Tricks
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              Mastering TypeScript
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              Tailwind CSS Best Practices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopLearningBlogs;
