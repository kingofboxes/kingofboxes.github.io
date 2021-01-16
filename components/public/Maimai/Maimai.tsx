/* eslint-disable prettier/prettier */
import React from 'react';
import { NextPage } from 'next';
import axios, { AxiosInstance } from 'axios';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { MMPlayerData, MMSongRecord, ContentProps } from '../../../types';
import { MaimaiSongComponent, MaimaiSongLoader } from './Maimai.data';

// Create Axios instance.
const api: AxiosInstance = axios.create({
  baseURL: 'https://kingofboxes.mxblue.net.au:4000/',
});

const contentProps: ContentProps = {
  heading: 'Maimai DX',
  description: [
    `Maimai DX is an arcade rhythm game with eight buttons spaced around in a circle. 
  Below are a list of songs available on the machine (the international version), 
  as the song list on the official site is not up-to-date.`,
    `Every song is either a "Deluxe" or "Standard" song, and is specified by the logo. If it is a Deluxe song,
  the font color is rainbow, and if it is a Standard song, the font color is white. Deluxe songs
  are exclusive to Maimai DX, and some songs may even have both Deluxe and Standard versions! The genre
  for each song is located in the top right corner.`,
    `Each song has a minimum of four difficulties: BASIC, ADVANCED, EXPERT and MASTER.
  Some songs have a fifth difficulty, RE:MASTER, which is harder than MASTER. The difficulty levels
  of the songs range from 1 to 15, and there is only currently one song that is Level 15.`,
    `I do not own any of the images or songs, all ownership belongs to SEGA.`,
  ],
};

const MaimaiDX: NextPage<MMPlayerData> = (data) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<number>(5);

  // UseEffect hook for infinite scroll.
  React.useEffect(() => {
    // Function to check whether the scroll bar is at the bottom.
    // If it is at the bottom, create a "loading" menu and display 10 more results after 0.5s.
    const checkScroll = () => {
      const height = document.body.scrollHeight;
      const curr = window.scrollY + window.innerHeight;
      if (curr >= height) {
        if (results < data.record.length) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setResults(results + 10);
          }, 500);
        }
      }
    };

    // Add event listener when mounting component.
    window.addEventListener('scroll', checkScroll);

    // Remove event listener when unmounting component.
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [results]);

  return (
    <PublicShell title="Maimai DX Song List | Justin's Website">
      <ContentHeader data={contentProps} />
      <h2>Song List</h2>
      {data.record &&
        data.record.map((song: MMSongRecord, idx: number) => {
          if (idx < results) {
            return <MaimaiSongComponent song={song} key={song.id} />;
          }
        })}
      {loading && <MaimaiSongLoader />}
    </PublicShell>
  );
};

// Fetch data before load.
MaimaiDX.getInitialProps = async () => {
  const res = await api.get('/maimai');
  const data: MMPlayerData = res.data;
  return data;
};

export default MaimaiDX;
