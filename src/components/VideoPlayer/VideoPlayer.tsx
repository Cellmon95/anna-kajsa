'use client';

import { useEffect, useState } from 'react';
import styles from './VideoPlayer.module.css';
import { Any } from 'next-sanity';

export interface VideoPlayerProps {
  heroSection: HTMLElement;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const [videoHeight, setVideoHeight] = useState<number>(0);
  let darkBackground: HTMLElement | null;
  useEffect(() => {
    darkBackground = document.getElementById('darkBackground');
    darkBackground?.classList.add('.hide');
    console.log(darkBackground?.classList);
  }, []);

  useEffect(() => {
    if (props.heroSection != null) {
      props.heroSection.addEventListener('click', () => {
        const clientWidth =
          document.getElementById('videoPlayer')?.clientWidth || 0;
        console.log(clientWidth);
        setVideoHeight(clientWidth * 0.5625);
      });
    }

    darkBackground?.classList.toggle('.hide');
  }, [props.heroSection]);

  return (
    <>
      <div
        className={styles.videoPlayer}
        id="videoPlayer"
        style={{ height: videoHeight + 'px' }}
      >
        <iframe
          className={styles.video}
          height={'auto'}
          src="https://www.youtube.com/embed/DNJ5JqLw9YM"
          title="2 Timmar Ghibli Bmg För Jobbet 🚖 Avkopplande Ghibli-Musik, Ghibli Studio"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.darkBackground}  ></div>
    </>
  );
}
