import { NotionAPI } from 'notion-client';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pageId = url.searchParams.get('pageId');

  const notion = new NotionAPI();
  try {
    const response = await notion.getPage(pageId || '');
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  }
}
