import { ExtendedRecordMap } from 'notion-types';
import React from 'react';

import NotionRenderer from '@/components/NotionRenderer';

import { get } from '@/services/get';

const slugNotionDatabaseMapper = {
  'tech-mahindra-hiring-pune-hyd-june-2024': '69da0a279a814d7dad60b0f9545c5a43',
  'infosys-hiring-it-professionals': '6a69d88e93a64d72967974195cf3558a',
  'work-from-home-jobs-women-pregnant': '9f45fe5bcf21416395297bf6b90b6306',
  'newly-mom-women-jobs': '60540a9482e042cd8f8434c9cc6fd418',
  'fresher-bumper-hiring-2024': '5ba0abbe367b44ea87693ce19a22168d',
};

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
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
