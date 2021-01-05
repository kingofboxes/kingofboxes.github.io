import React from 'react';
import { NextPage } from 'next';

import PublicShell from '../../common/PublicShell';
import { Svg } from 'react-optimized-image';
import Maimai from '../../../assets/maimai.svg';

import styles from '../../styling/HomePage.module.css';

const HomePage: NextPage = () => {
  return (
    <PublicShell title="Home | kingofboxes's Website">
      <div className={styles.container}>
        <h1>Welcome to my website!</h1>
        <div className={styles.image}>
          <Svg src={Maimai} />
        </div>
        <h2>This is an ongoing work-in-progress, but enjoy your stay! :)</h2>
      </div>
    </PublicShell>
  );
};

export default HomePage;
