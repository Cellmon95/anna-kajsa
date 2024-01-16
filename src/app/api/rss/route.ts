import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function getFeed(req: NextRequest, res: NextResponse) {
  const feedUrl = 'https://robinpersson.substack.com/feed';
  try {
    const feed = await parser.parseURL(feedUrl);
    console.log('feed', feed);
    //@ts-ignore TODO: fix this
    res.status(200).json(feed);
  } catch (error) {
    //@ts-ignore TODO: fix this
    res.status(500).json({ message: 'Internal server error' });
  }
}
