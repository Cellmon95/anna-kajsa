import PostCard from '../PostCard/PostCard';
import { getBlogPosts, getBlogPost } from '../../../sanity/sanity-utils';
import { getSpotifyEpisodes } from '@/app/utils';
import GeneralCarousel from '../GeneralCarousel/GeneralCarousel';

export async function generateStaticParams() {
  const episodes = await getSpotifyEpisodes();

  return episodes;
}

interface podEpisode {
  title: string;
  img: string;
  description: string;
  url: string;
}

export async function PodcastContainer() {
  const episodes = await generateStaticParams();

  const arrEpisodes = episodes.slice(0, 4);

  console.log('arrEpisodes', arrEpisodes);

  return (
    <div>
      <GeneralCarousel>
        {arrEpisodes.map((episode: podEpisode, index: number) => (
          <PostCard
            key={index}
            url={episode.url}
            title={episode.title}
            img={episode.img}
            description={episode.description}
          />
        ))}
      </GeneralCarousel>
    </div>
  );
}
