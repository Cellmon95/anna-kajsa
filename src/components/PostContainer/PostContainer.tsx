import Carousel from '../Carousel/Carousel';
import PostCard from '../PostCard/PostCard';
import { getBlogPosts, getBlogPost } from '../../../sanity/sanity-utils';
import GeneralCarousel from '../GeneralCarousel/GeneralCarousel';

export async function generateStaticParams() {
  const blogCards = await getBlogPosts();

  return blogCards;
}

export default async function PostContainer() {
  const blogCards = await generateStaticParams(); // Declare blogCards variable
  console.log(blogCards);

  return (
    <div>
      <GeneralCarousel>
        {blogCards.map((card) => (
          <PostCard
            key={card.slug}
            title={card.name}
            image={card.image}
            description={'description'}
            url='/'
          />
        ))}
      </GeneralCarousel>
    </div>
  );
}
