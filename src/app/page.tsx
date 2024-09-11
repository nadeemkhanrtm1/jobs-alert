import * as React from 'react';

import NotionRenderer from '@/components/NotionRenderer';

export default async function HomePage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion`
  );
  const result = await response.json();
  return (
    <>
      <NotionRenderer recordMap={result} />
    </>
  );
}
