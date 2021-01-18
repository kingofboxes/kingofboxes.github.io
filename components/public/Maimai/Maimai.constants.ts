/* eslint-disable prettier/prettier */
import { MMSongRecord, MMSongData } from '../../../types';

// Genre list for maimai.
export const getGenres = (list: MMSongRecord[]): Record<string, string>[] => {
  const genres: string[] = [];
  const genreList: Record<string, string>[] = [];

  // Map out dropdown from list of unique genres.
  list.forEach((song: MMSongRecord) => {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  });

  genres.map((genre: string) => {
    genreList.push({
      key: genre,
      text: genre,
      value: genre,
    });
  });
  return genreList;
};

// Level list for maimai.
export const getLevels = (list: MMSongRecord[]): Record<string, string>[] => {
  const levels: string[] = [];
  const strLevels: string[] = [];
  const floatLevels: number[] = [];
  const levelsList: Record<string, string>[] = [];

  // Get a list of unique levels and turn any 'X+' into 'X.5's.
  list.forEach((song: MMSongRecord) => {
    Object.keys(song.data).map((diff: string) => {
      if (!levels.includes(song.data[diff as keyof MMSongData].level)) {
        const temp = song.data[diff as keyof MMSongData].level.replace('+', '.5');
        floatLevels.push(Number(temp));
        levels.push(song.data[diff as keyof MMSongData].level);
      }
    });
  });

  // Sort the new array of floats, then turn all of them back into standard levels.
  floatLevels.sort((a, b) => a - b);
  floatLevels.forEach((level) => {
    const temp = String(level).replace('.5', '+');
    strLevels.push(temp);
  });

  // Map out dropdown from list of levels.
  strLevels.map((level: string) => {
    levelsList.push({
      key: level,
      text: level,
      value: level,
    });
  });
  return levelsList;
};

// Get difficulties.
export const getDifficulties = (): Record<string, string>[] => {
  const difficultiesList: Record<string, string>[] = [];
  const difficulties = ['BASIC', 'ADVANCED', 'EXPERT', 'MASTER', 'REMASTER'];
  difficulties.map((level: string) => {
    difficultiesList.push({
      key: level,
      text: level,
      value: level,
    });
  });
  return difficultiesList;
}

// Default options.
export const defaultOptions: Record<string, string> = {
  name: '',
  artist: '',
  level: '',
  genre: '',
  difficulty: '',
};
