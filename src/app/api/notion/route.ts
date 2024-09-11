import { NotionAPI } from 'notion-client';

import { NOTION_CONFIG } from '@/config/notion-dbs';
export async function GET() {
  const notion2 = new NotionAPI();
  const databaseId = NOTION_CONFIG.BLOGS_DATABASE_ID;
  const notionAPIResponse = await notion2.getPage(databaseId);
  return new Response(JSON.stringify(notionAPIResponse), { status: 200 });
}
