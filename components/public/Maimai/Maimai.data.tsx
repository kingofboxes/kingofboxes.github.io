/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { MMSongRecord, MMSongData } from '../../../types';

import styles from '../../styling/Maimai.module.css';

// Interface for page.
interface MMSongRecordInterface {
  song: MMSongRecord;
}

// Profile header.
export const MaimaiSongComponent: React.FC<MMSongRecordInterface> = ({ song }) => {
  return (
    <div key={song.id} className={styles.container}>
      <div className={styles.album}>
        <img src={song.cover} alt={`${song.song}-album-cover`} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          {song.version === 'DELUXE' && (
            <div className={styles.version}>
              <img src="https://maimaidx-eng.com/maimai-mobile/img/music_dx.png" />
            </div>
          )}
          {song.version === 'STANDARD' && (
            <div className={styles.version}>
              <img src="https://maimaidx-eng.com/maimai-mobile/img/music_standard.png" />
            </div>
          )}
          <span className={styles.genre}>{song.genre}</span>
        </div>
        <div className={styles.details}>
          <span className={styles.songname}>{song.song}</span>
          <hr />
          <span className={styles.artist}>{song.artist}</span>
        </div>
        <div className={styles.difficulty}>
          {Object.keys(song.data).map((diff: string) => {
              return (
                <div key={`${song.id}-${diff}`} className={styles[diff]}>
                  {song.data[diff as keyof MMSongData] && song.data[diff as keyof MMSongData].level}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export const MaimaiSongLoader: React.FC = () => {
  return (
    <Segment>
      <Dimmer active>
        <Loader size='big'>Loading</Loader>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  )
}

module.exports = {
  MaimaiSongComponent,
  MaimaiSongLoader,
};
