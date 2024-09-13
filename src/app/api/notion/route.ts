import { NOTION_CONFIG } from '@/config/notion-dbs';
import { notionClient } from '@/singleton/notion';

export async function GET() {
  const databaseId = NOTION_CONFIG.BLOGS_DATABASE_ID;
  const response = await notionClient.databases.query({
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
