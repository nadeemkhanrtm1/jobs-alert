import { Client } from '@notionhq/client';

import { NOTION_CONFIG } from '@/config/notion-dbs';

export async function GET() {
  const notion = new Client({ auth: NOTION_CONFIG.NOTION_API_KEY });
  const databaseId = NOTION_CONFIG.BLOGS_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published Date',
      date: {
        on_or_after: '2023-02-08',
      },
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
}
