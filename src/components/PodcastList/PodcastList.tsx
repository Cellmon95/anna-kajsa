import { useEffect, useState } from 'react';
import { getSubstackPosts, SubstackPost } from '../../app/utils';
import PostCard from '../PostCard/PostCard';

import styles from './PodcastList.module.css';

export default function PodcastList() {
  //fetch data
  const [postData, setPostData] = useState<SubstackPost[]>([]);
  let tmp: SubstackPost[] = [];

  useEffect(() => {
    getSubstackPosts().then((value) => {
      setPostData(value);
    });
  }, []);

  function sortPostList(e: any) {
    const sortOption = document.getElementById(
      'sortOption'
    ) as HTMLSelectElement;

    switch (sortOption.value) {
      case 'newest':
        //const sort = postData.sort((a, b) => {
        //return (a > b) as unknown as number;
        //});
        //setPostData([]);
        break;

      case 'alphabeticly':
        const sortedPostData = postData.sort((a, b) => {
          const aUpper = a.title.toUpperCase();
          const bUpper = b.title.toUpperCase();

          if (aUpper > bUpper) {
            return 1;
          }

          if (aUpper < bUpper) {
            return -1;
          } else return 0;
        });
        sortedPostData.pop();

        setPostData(sortedPostData);
        console.log(postData);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <section>
        <section className={styles.sortBar}>
          <input type="text" placeholder="search"></input>
          <div>
            <label>Sort on: </label>
            <select name="sortOption" id="sortOption" onChange={sortPostList}>
              <option value={'newest'}>Newest</option>
              <option value={'alphabeticly'}>Alphabeticly</option>
            </select>
          </div>
        </section>

        <section className={styles.postCardList}>
          {postData.map((substackPost) => (
            <PostCard
              title={substackPost.title}
              description={substackPost.desc}
              image={substackPost.img}
              url={substackPost.link}
              key={substackPost.title}
            ></PostCard>
          ))}
        </section>
      </section>
    </>
  );
}
