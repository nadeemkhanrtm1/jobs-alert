import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {/* Column 1 */}
          <div>
            <h2 className='text-xl font-bold'>Company</h2>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h2 className='text-xl font-bold'>Support</h2>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h2 className='text-xl font-bold'>Follow Us</h2>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
          <p className='text-sm text-gray-400'>
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
