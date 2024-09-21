import * as React from 'react';

import ContentContainer from '@/components/container/Container';
import Feed from '@/components/feed/feed';

import { get } from '@/services/get';
import { prePareJobDetails } from '@/utils/prePareJobCardData.util';

export default async function HomePage() {
  const apiResponse = await get({ endPoint: 'api/notion' });
  const feedCardDetails = prePareJobDetails(apiResponse);
  return (
    <>
      <ContentContainer.Main>
        <Feed blogDetails={feedCardDetails} />
      </ContentContainer.Main>
    </>
  );
}
