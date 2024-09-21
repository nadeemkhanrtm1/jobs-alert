import { idToUuid } from 'notion-utils';

export const NOTION_CONFIG = {
  BLOGS_DATABASE_ID: idToUuid(process.env.NEXT_PUBLIC_BLOGS_DATABASE_ID),
  NOTION_API_KEY: process.env.NEXT_PUBLIC_NOTION_API_KEY,
};
