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
