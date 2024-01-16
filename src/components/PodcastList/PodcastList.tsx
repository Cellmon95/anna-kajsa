import { getSubstackPosts } from '../../app/utils';
import PostCard from '../PostCard/PostCard';

import styles from './PodcastList.module.css';

export default async function PodcastList() {
  //fetch data
  const data = await getSubstackPosts();

  return (
    <>
      <section>
        <section className={styles.sortBar}>
          <input type="text" placeholder="search"></input>
          <div>
            <label>Sort on: </label>
            <select name="sortOption" id="sortOption">
              <option>Newest</option>
              <option>Alphabeticly</option>
            </select>
          </div>
        </section>

        <section className={styles.postCardList}>
          {data.map((substackPost) => (
            <PostCard
              title={substackPost.title}
              description={substackPost.desc}
              image={substackPost.img}
              url={substackPost.link}
            ></PostCard>
          ))}
        </section>
      </section>
    </>
  );
}
