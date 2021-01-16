import React from 'react';
import { NextPage } from 'next';
import axios, { AxiosInstance } from 'axios';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { MMPlayerData, ContentProps } from '../../../types';
import { MaimaiSongComponent } from './Maimai.data';

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
  return (
    <PublicShell title="Maimai DX Song List | Justin's Website">
      <ContentHeader data={contentProps} />
      <h2>Song List</h2>
      {data.record.map((song) => {
        return <MaimaiSongComponent song={song} key={song.id} />;
      })}
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
