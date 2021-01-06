// Types
import { ReactNode } from 'react';

// For the public shell.
export type ShellProps = {
  children?: ReactNode,
  title?: string,
};

// For WaniKani:
export type WKUser = {
  username: string,
  level: number,
  profile: string,
  date_started: string,
  time_updated: string,
};

// Reviews.
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

// Accuracy per subject.
type WKAccuracySubject = {
  readings: number,
  meanings: number,
  total: number,
};

// Accuracy overall.
type WKAccuracy = {
  readings: number,
  meanings: number,
  total: number,
  radical: WKAccuracySubject,
  kanji: WKAccuracySubject,
  vocabulary: WKAccuracySubject,
};

// Items.
type WKItems = {
  radical: number,
  kanji: number,
  vocabulary: number,
};

// Export the collection of types.
export type WKProfile = {
  user: WKUser,
  items: WKItems,
  review: WKReview,
  accuracy: WKAccuracy,
};
