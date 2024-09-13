import { Client } from '@notionhq/client';

import { NOTION_CONFIG } from '@/config/notion-dbs';

// Create a singleton instance of the Notion client
class NotionService {
  private static instance: Client;

  // Private constructor to prevent instantiation
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  // Get the singleton instance of the Notion client
  public static getInstance(): Client {
    if (!NotionService.instance) {
      NotionService.instance = new Client({
        auth: NOTION_CONFIG.NOTION_API_KEY,
      });
    }
    return NotionService.instance;
  }
}

export const notionClient = NotionService.getInstance();
