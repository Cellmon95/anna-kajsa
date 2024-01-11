import Carousel from '../Carousel/Carousel';
import PostCard from '../PostCard/PostCard';
import { getBlogPosts, getBlogPost } from '../../../sanity/sanity-utils';

export async function generateStaticParams() {
  const blogCards = await getBlogPosts();

  return blogCards;
}

export default async function PostContainer() {
  const blogCards = await generateStaticParams(); // Declare blogCards variable

  return (
    <div>
      <Carousel>
        {blogCards.map((card) => (
          <PostCard
            key={card.slug}
            title={card.name}
            image={card.image}
            description={'description'}
          />
        ))}
      </Carousel>
    </div>
  );
}
