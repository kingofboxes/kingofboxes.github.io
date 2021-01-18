/* eslint-disable prettier/prettier */
import React from 'react';
import { NextPage } from 'next';
import axios, { AxiosInstance } from 'axios';
import { DropdownProps, Form } from 'semantic-ui-react'

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { MMPlayerData, MMSongRecord, ContentProps, MMSongData } from '../../../types';
import { MaimaiSongComponent, MaimaiSongLoader } from './Maimai.data';
import { getGenres, getLevels, defaultOptions } from './Maimai.constants';

import styles from '../../styling/Maimai.module.css';

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

  // Variables for controlling state on this page.
  const [loading, setLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<number>(5);
  const [list, setList] = React.useState<MMSongRecord[]>(data.record);
  const [query, setQuery] = React.useState<Record<string, string>>(defaultOptions);
  const genreList = getGenres(data.record);
  const levelsList = getLevels(data.record);

  // UseEffect hook for infinite scroll.
  React.useEffect(() => {
    const checkScroll = () => {
      const height = document.body.scrollHeight;
      const curr = window.scrollY + window.innerHeight;
      if (curr >= height) {
        if (list && results < list.length) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setResults(results + 10);
          }, 500);
        }
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [list, results]);

  // Handle filtering by name, artist, genre and level.
  const setName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const options = {...query, name: event.target.value}
    filter(options)
  }

  const setArtist = (event: React.ChangeEvent<HTMLInputElement>) => {
    const options = {...query, artist: event.target.value}
    filter(options)
  }

  const setGenre = (_event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    const genre = String(data.value);
    const options: Record<string, string> = {...query, genre: genre}
    filter(options)
  }

  const setLevel = (_event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    const level = String(data.value);
    const options: Record<string, string> = {...query, level: level}
    filter(options)
  }

  const checkLevel = (list: MMSongRecord[], level: string) => {
    // Take care of meta character for regex.
    const levelPattern = level.replace('+', `\\+`);
    let newList: MMSongRecord[] = [];
    const pattern = new RegExp(`^${levelPattern}$`, 'i');
    list.forEach((song: MMSongRecord) => {
      Object.keys(song.data).map((diff: string) => {
        if (pattern.test(song.data[diff as keyof MMSongData].level)) {
          newList.push(song);
        }
      })
    })

    // Filter out duplicate songs with same levels for multiple difficulties.
    newList = newList.filter((song, idx) => newList.indexOf(song) === idx);
    return newList;
  }

  const filter = (options: Record<string, string>) => {

    let pattern: RegExp;
    let newList = data.record;

    if (options.name !== '') {
      pattern = new RegExp(options.name, 'i');
      newList = newList.filter((song) => pattern.test(song.song));
    }

    if (options.artist !== '') {
      pattern = new RegExp(options.artist, 'i');
      newList = newList.filter((song) => pattern.test(song.artist));
    }

    if (options.genre !== '') {
      pattern = new RegExp(options.genre, 'i');
      newList = newList.filter((song) => pattern.test(song.genre));
    }

    if (options.level !== '') {
      newList = checkLevel(newList, options.level);
    }

    setList(newList);
    setQuery(options);
  }

  return (
    <PublicShell title="Maimai DX Song List | Justin's Website">
      <ContentHeader data={contentProps} />
      <h2>Song List</h2>
      <div className={styles.search}>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Song Name:' placeholder='Search by song name...' value={query.name} onChange={setName} />
            <Form.Input fluid label='Artist:' placeholder='Search by artist...' value={query.artist} onChange={setArtist}/>
            <Form.Dropdown fluid label='Genre:' selection placeholder='Filter by genre...' options={genreList} onChange={setGenre} />
            <Form.Dropdown fluid label='Level:' selection placeholder='Filter by level...' options={levelsList} onChange={setLevel} />
          </Form.Group>
        </Form>
      </div>
      {list &&
        list.map((song: MMSongRecord, idx: number) => {
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
