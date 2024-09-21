import React, { FC } from 'react';

import FeedCard from '@/components/feed-card/feed-card';

import { BlogShortDetails } from '@/types/blogShortDetailsType';

type FeedType = { blogDetails: Array<BlogShortDetails> };

const Feed: FC<FeedType> = ({ blogDetails }) => {
  if (!blogDetails) {
    return null;
  }
  return (
    <div className='flex flex-col gap-10'>
      {blogDetails &&
        blogDetails?.map((details, index) => (
          <FeedCard key={index} {...details} />
        ))}
    </div>
  );
};

export default Feed;
