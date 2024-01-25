import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { getSubstackPosts, SubstackPost } from '../../app/utils';
import PostCard from '../PostCard/PostCard';

import styles from './PodcastList.module.css';
import { text } from 'stream/consumers';

export default function PodcastList() {
  //the hook that updates the data that is displayed on site.
  const [displayData, setDisplayData] = useState<SubstackPost[]>([]);

  //the raw data fetched from the rss. Should be readonly!
  const [postData, setPostData] = useState<SubstackPost[]>([]);

  useEffect(() => {
    getSubstackPosts().then((value) => {
      setPostData(value);
      setDisplayData(value);
    });
  }, []);

  function sortPostList(e: any) {
    const sortOption = document.getElementById(
      'sortOption'
    ) as HTMLSelectElement;

    let postDataCopy = [];

    switch (sortOption.value) {
      case 'newest':
        postDataCopy = [...postData];

        postDataCopy.sort((a, b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          else return 0;
        });

        setDisplayData(postDataCopy);

        break;

      case 'alphabeticly':
        postDataCopy = [...postData];

        postDataCopy.sort((a, b) => {
          const aUpper = a.title.toUpperCase();
          const bUpper = b.title.toUpperCase();

          if (aUpper > bUpper) return 1;
          if (aUpper < bUpper) return -1;
          else return 0;
        });

        setDisplayData(postDataCopy);

        break;
      default:
        break;
    }
  }

  function searchPostList(e: any) {
    const searchField = document.getElementById(
      'searchField'
    ) as HTMLInputElement;

    const postDataCopy: SubstackPost[] = [...postData];
    const tmpDisplayData: SubstackPost[] = [];
    const searchString: string = searchField.value;

    postDataCopy.forEach((post) => {
      const postTitleUpper = post.title.toUpperCase();

      if (postTitleUpper.search(searchString.toUpperCase()) !== -1) {
        tmpDisplayData.push(post);
      }

      setDisplayData(tmpDisplayData);
    });
  }

  return (
    <>
      <section>
        <section className={styles.sortBar}>
          <div>
            <input
              type="text"
              placeholder="search"
              id="searchField"
              className={styles.searchBar}
            ></input>
            <button className={styles.searchButton} onClick={searchPostList}>
              Search
            </button>
          </div>

          <div>
            <label>Sort on: </label>
            <select name="sortOption" id="sortOption" onChange={sortPostList}>
              <option value={'newest'}>Newest</option>
              <option value={'alphabeticly'}>Alphabeticly</option>
            </select>
          </div>
        </section>

        <section className={styles.postCardListContainer}>
          <section className={styles.postCardList}>
            {displayData.map((substackPost) => (
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
      </section>
    </>
  );
}
