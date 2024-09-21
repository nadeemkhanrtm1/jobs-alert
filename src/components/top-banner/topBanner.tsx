import React from 'react';

import { get } from '@/services/get';
import { prePareJobDetails } from '@/utils/prePareJobCardData.util';

const TopBanner = async () => {
  const apiResponse = await get({ endPoint: 'api/notion' });
  const feedCardDetails = prePareJobDetails(apiResponse);
  const topBannerDetails = feedCardDetails?.[0] || {};
  return (
    <div
      className='h-44'
      style={{
        backgroundImage: `url(${feedCardDetails?.[0]?.featuredImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h1 className='text-7xl font-bold'>{topBannerDetails?.title}</h1>
    </div>
  );
};

export default TopBanner;
