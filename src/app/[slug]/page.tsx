import { ExtendedRecordMap } from 'notion-types';
import React from 'react';

import NotionRenderer from '@/components/NotionRenderer';

import { get } from '@/services/get';

const slugNotionDatabaseMapper = {
  'tech-mahindra-hiring-pune-hyd-june-2024': '69da0a279a814d7dad60b0f9545c5a43',
};

const BlogDetailsPage = async () => {
  const apiResponse = await get<ExtendedRecordMap>({
    endPoint: 'api/notion-page',
    queryParams: {
      pageId:
        slugNotionDatabaseMapper['tech-mahindra-hiring-pune-hyd-june-2024'],
    },
  });
  return (
    <div>
      <NotionRenderer recordMap={apiResponse} />
    </div>
  );
};

export default BlogDetailsPage;
