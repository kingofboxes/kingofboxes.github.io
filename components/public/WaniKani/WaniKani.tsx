import React from 'react';
import { NextPage } from 'next';
import axios, { AxiosInstance } from 'axios';
import { Img } from 'react-optimized-image';

import { WKProfile } from '../../../interfaces';
import Avatar from '../../../assets/avatar.png';

import PublicShell from '../../common/PublicShell';

import styles from '../../styling/WaniKani.module.css';

// Create Axios instance.
const api: AxiosInstance = axios.create({
  headers: {
    'Wanikani-Revision': '20170710',
    Authorization: 'Bearer ' + process.env.WK_API_TOKEN,
  },
  baseURL: 'https://api.wanikani.com/v2/',
});

const WaniKani: NextPage<WKProfile> = (props) => {
  const { username, level, profile, date_started, time_updated } = props;
  return (
    <PublicShell title="WaniKani Progression | kingofboxes's Website">
      <div className={styles.container}>
        <h1>This page is to show off my progress for WaniKani!</h1>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Img src={Avatar} sizes={[128]} />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.progress}>
              <a href={profile}>{username}</a>
              <p>Level: {level}</p>
            </div>
            <div className={styles.time}>
              <p>Date Started: {date_started}</p>
              <p>Last Updated: {time_updated}</p>
            </div>
          </div>
        </div>
      </div>
    </PublicShell>
  );
};

// Fetch data before load.
WaniKani.getInitialProps = async () => {
  const res = await api.get('/user');
  const userData = res.data;

  // Get dates in readable form.
  const options = { timeZoneName: 'short' };
  const date_started_str = new Date(userData.data.started_at)
    .toLocaleString('en-AU', options)
    .toUpperCase()
    .replace(/:\d{2} /, ' ');
  const time_updated_str = new Date(userData.data_updated_at)
    .toLocaleString('en-AU', options)
    .toUpperCase()
    .replace(/:\d{2} /, ' ');

  return {
    username: userData.data.username,
    level: userData.data.level,
    profile: userData.data.profile_url,
    date_started: date_started_str,
    time_updated: time_updated_str,
  };
};

export default WaniKani;
