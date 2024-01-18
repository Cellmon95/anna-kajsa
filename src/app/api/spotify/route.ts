import { title } from 'process';
import { showEpisodes } from '../../../../sanity/lib/spotify';
import { NextRequest, NextResponse } from 'next/server';
import { url } from 'inspector';

interface Episode {
  name: string;
  description: string;
  release_date: string;
  external_urls: {
    spotify: string;
  };
  images: any;
}

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await showEpisodes();
  const { items } = await response.json();

  const episodes = items.map((episode: Episode) => ({
    title: episode.name,
    description: episode.description,
    release_date: episode.release_date,
    url: episode.external_urls.spotify,
    img: episode.images[0].url,
  }));

  try {
    return new Response(JSON.stringify(episodes), {
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
