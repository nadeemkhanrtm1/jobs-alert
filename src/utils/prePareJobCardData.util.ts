import { BlogShortDetails } from '@/types/blogShortDetailsType';

export const prePareJobDetails = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apiResponse: any
): Array<BlogShortDetails> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return apiResponse?.results?.map((page: any) => ({
    title: page.properties.Title.title[0]?.plain_text || '',
    summary: page.properties.Summary.rich_text[0]?.plain_text || '',
    slug: page.properties.slug.rich_text[0]?.plain_text || '',
    tags: page.properties.Tags.select?.name || '',
    lastUpdated: page.properties['Last Updated'].last_edited_time || '',
    featuredImage: page.properties['Featured Image'].files[0]?.file.url || '',
    publicUrl: page.public_url || '',
  }));
};
