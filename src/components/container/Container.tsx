import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> & {
  Main: React.FC<ContentContainerProps>;
  Summary: React.FC<ContentContainerProps>;
} = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto px-2 lg:px-8 py-8'>
      <div className='flex flex-col-reverse md:flex-row gap-10'>{children}</div>
    </div>
  );
};

// Child Component for Main Content
ContentContainer.Main = ({ children }) => {
  return <div className='w-full md:pr-8 mb-8 md:mb-0'>{children}</div>;
};

// Child Component for Summary Headlines
ContentContainer.Summary = ({ children }) => {
  return <div className='md:w-2/5 w-full'>{children}</div>;
};

export default ContentContainer;
