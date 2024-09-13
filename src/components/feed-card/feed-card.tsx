import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BlogShortDetails } from '@/types/blogShortDetailsType';

type FeedCardProps = BlogShortDetails;

const FeedCard: React.FC<FeedCardProps> = ({
  title,
  summary,
  tags,
  lastUpdated,
  featuredImage,
  slug,
}) => {
  return (
    <Link href={slug}>
      <div className='w-full'>
        {featuredImage && (
          <Image
            width={100}
            height={100}
            unoptimized
            src={featuredImage}
            alt={title}
            className='w-full max-h-96 object-cover rounded-md mb-4'
          />
        )}
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-900 mb-2'>{title}</h2>
          <p className='text-sm text-gray-500 mb-4'>{summary}</p>
          <span className='text-sm font-medium text-orange-500'>{tags}</span>
          <span className='text-xs text-gray-400 mt-2'>
            Last updated: {new Date(lastUpdated).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard;
