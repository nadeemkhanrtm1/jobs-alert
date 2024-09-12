import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> & {
  Main: React.FC<ContentContainerProps>;
  Summary: React.FC<ContentContainerProps>;
} = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex flex-col md:flex-row'>{children}</div>
    </div>
  );
};

// Child Component for Main Content
ContentContainer.Main = ({ children }) => {
  return <div className='w-full md:pr-8 mb-8 md:mb-0'>{children}</div>;
};

// Child Component for Summary Headlines
ContentContainer.Summary = ({ children }) => {
  return (
    <div className='w-2/5 hidden md:block'>
      <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Summary Headlines</h2>
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
