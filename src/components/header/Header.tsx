'use client';

const Header = () => {
  return (
    <nav className='fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-white/40 backdrop-blur-md py-2 px-6 rounded-full shadow-xl border border-gray-200'>
      <ul className='flex space-x-6'>
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <li
            key={index}
            className='text-gray-800 font-semibold hover:text-gray-600'
          >
            <a href='#' className='text-lg'>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
