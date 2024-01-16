import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET(req: NextRequest, res: NextResponse) {
  const feedUrl = 'https://robinpersson.substack.com/feed';
  try {
    const feed = await parser.parseURL(feedUrl);
    console.log('feed', feed);
    return new Response(JSON.stringify(feed), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
