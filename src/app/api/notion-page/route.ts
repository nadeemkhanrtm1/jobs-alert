import { NotionAPI } from 'notion-client';

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

  // const notion = new Client({ auth: NOTION_CONFIG.NOTION_API_KEY});
  // const response = await notion.blocks.retrieve({
  //   block_id: pageId || '' });

  //   const response = await notion.blocks.children.list({
  //     block_id: pageId || '',
  //     page_size: 50,
  //   });
  // console.log(response);
  // return new Response(JSON.stringify(response), { status: 200 });
}
