// Types
import { ReactNode } from 'react';

// For the public shell.
export type ShellProps = Readonly<{
  children?: ReactNode,
  title?: string,
}>;

// For content headers.
export type ContentProps = Readonly<{
  heading?: string,
  description?: string | string[],
}>;

// For WaniKani:
export type WKUser = Readonly<{
  username: string,
  level: number,
  profile: string,
  date_started: string,
  time_updated: string,
}>;

// Reviews.
type WKReview = Readonly<{
  total_readings: number,
  total_meanings: number,
  total_reviews: number,
  correct_readings: number,
  correct_meanings: number,
  correct_reviews: number,
  incorrect_readings: number,
  incorrect_meanings: number,
  incorrect_reviews: number,
}>;

// Accuracy per subject.
type WKAccuracySubject = Readonly<{
  readings: number,
  meanings: number,
  total: number,
}>;
// Accuracy overall.
type WKAccuracy = Readonly<{
  readings: number,
  meanings: number,
  total: number,
  radical: WKAccuracySubject,
  kanji: WKAccuracySubject,
  vocabulary: WKAccuracySubject,
}>;

// Items.
type WKItems = Readonly<{
  radical: number,
  kanji: number,
  vocabulary: number,
}>;

// Export the collection of types.
export type WKProfile = Readonly<{
  user: WKUser,
  items: WKItems,
  review: WKReview,
  accuracy: WKAccuracy,
}>;

type MMSongDetails = {
  level: string,
  rank: null | string,
  score: number,
};

export type MMSongData = {
  BASIC: MMSongDetails,
  ADVANCED: MMSongDetails,
  EXPERT: MMSongDetails,
  MASTER: MMSongDetails,
  REMASTER: MMSongDetails,
};

export type MMSongRecord = {
  id: number,
  song: string,
  artist: string,
  genre: string,
  version: string,
  cover: string,
  data: MMSongData,
};

export type MMPlayerData = {
  avatar: string,
  name: string,
  rating: number,
  play_count: number,
  last_played: string,
  record: MMSongRecord[],
};
