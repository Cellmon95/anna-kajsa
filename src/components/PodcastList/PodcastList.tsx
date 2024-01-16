'use client';

import styles from './PodcastList.module.css';

export default function PodcastList() {
  //fetch data
  

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

        <section></section>
      </section>
    </>
  );
}
