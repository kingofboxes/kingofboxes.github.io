import React from 'react';
import { NextPage } from 'next';
import { Svg } from 'react-optimized-image';

import PublicShell from '../../common/PublicShell';
import Maimai from '../../../assets/maimai.svg';
import styles from '../../styling/HomePage.module.css';

const HomePage: NextPage = () => {
  return (
    <PublicShell title="Home | Justin's Website">
      <div className={styles.container}>
        <h1>Welcome to my website!</h1>
        <div className={styles.image}>
          <Svg src={Maimai} />
          <span className={styles.caption}>
            Mascot character from Maimai DX (an arcade rhythm game).
          </span>
        </div>
        <h2>This is an ongoing work-in-progress, but enjoy your stay! :)</h2>
      </div>
    </PublicShell>
  );
};

export default HomePage;
