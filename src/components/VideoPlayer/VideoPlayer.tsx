'use client';

import { useEffect, useState } from 'react';
import styles from './VideoPlayer.module.css';
import { Any } from 'next-sanity';

export interface VideoPlayerProps {
  heroSection: HTMLElement;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const [videoHeight, setVideoHeight] = useState<number>(0);
  const [showDarkBackground, setShowDarkBackground] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  let darkBackground: HTMLElement | null;

  useEffect(() => {
    darkBackground = document.getElementById('darkBackground');
  }, []);

  useEffect(() => {
    if (props.heroSection != null) {
      props.heroSection.addEventListener('click', () => {
        setShowDarkBackground(true);
        setShowVideo(true);
        const clientWidth =
          document.getElementById('videoPlayer')?.clientWidth || 0;

        setVideoHeight(clientWidth * 0.5625);
        console.log(clientWidth);
      });
    }
  }, [props.heroSection]);

  return (
    <>
      <div
        className={styles.videoPlayer + (showVideo ? '' : ' ' + styles.hide)}
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

      <div
        className={styles.darkBackground + (showDarkBackground ? '' : '.hide')}
        onClick={() => {
          setShowDarkBackground(false);
          setShowVideo(false);
        }}
      ></div>
    </>
  );
}
