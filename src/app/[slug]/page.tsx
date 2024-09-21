import { ExtendedRecordMap } from 'notion-types';
import React from 'react';

const NotionRenderer = dynamic(() => import('@/components/NotionRenderer'), {
  ssr: false,
});

import dynamic from 'next/dynamic';

import { get } from '@/services/get';

const slugNotionDatabaseMapper = {
  'one-of-the-ways-to-make-money-online-work-from-home':
    '1069589e6a2e8076815cdfeb8a6bc2a2',
  'create-once-and-get-money-always': '1089589e6a2e80d4aa58cfdd62813798',
  'unlocking-online-earning-potential-students':
    'dd4daf88675642e4a00df6cdbac48af5',
  'ghar-se-kaam-mahilao-ke-liye': '1089589e6a2e806d9d30d99ddf8901c9',
};

export function generateStaticParams() {
  return [{ slug: [''] }];
}

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  if (!params.slug) {
    return <>Error</>;
  }

  const apiResponse = await get<ExtendedRecordMap>({
    endPoint: 'api/notion-page',
    queryParams: {
      pageId:
        slugNotionDatabaseMapper[
          params.slug as keyof typeof slugNotionDatabaseMapper
        ],
    },
  });
  return (
    <div className='bg-white rounded-lg border'>
      <NotionRenderer recordMap={apiResponse} />
    </div>
  );
};

export default BlogDetailsPage;
