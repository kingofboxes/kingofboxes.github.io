// Types
import { ReactNode } from 'react';

// For the public shell.
export type ShellProps = {
  children?: ReactNode,
  title?: string,
};

// For the WaniKani page.
export type WKStats = {
  username: string,
  level: number,
  profile: string,
  date_started: string,
  time_updated: string,
};

export type WKUser = {
  username: string,
  level: number,
  profile: string,
  date_started: string,
  time_updated: string,
};

type WKReview = {
  total_readings: number,
  total_meanings: number,
  total_reviews: number,
  correct_readings: number,
  correct_meanings: number,
  correct_reviews: number,
  incorrect_readings: number,
  incorrect_meanings: number,
  incorrect_reviews: number,
};

type WKAccuracySubject = {
  readings: number,
  meanings: number,
  total: number,
};

type WKAccuracy = {
  readings: number,
  meanings: number,
  total: number,
  radical: WKAccuracySubject,
  kanji: WKAccuracySubject,
  vocabulary: WKAccuracySubject,
};

type WKItems = {
  radical: number,
  kanji: number,
  vocabulary: number,
};

// For the WaniKani page.
export type WKProfile = {
  user: WKUser,
  items: WKItems,
  review: WKReview,
  accuracy: WKAccuracy,
};
