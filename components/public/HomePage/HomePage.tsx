import React from 'react';
import { NextPage } from 'next';
import { Svg } from 'react-optimized-image';

import PublicShell from '../../common/PublicShell';
import Maimai_S from '../../../assets/maimai_s.svg';
import Maimai_L from '../../../assets/maimai_l.svg';
import styles from '../../styling/HomePage.module.css';

const HomePage: NextPage = () => {
  return (
    <PublicShell title="Home | Justin's Website">
      <div className={styles.container}>
        <h2>Welcome to my website!</h2>
        <div className={styles.limage}>
          <Svg src={Maimai_L} />
          <span className={styles.caption}>
            Mascot character from Maimai DX (an arcade rhythm game).
          </span>
        </div>
        <div className={styles.simage}>
          <Svg src={Maimai_S} />
          <span className={styles.caption}>
            Mascot character from Maimai DX (an arcade rhythm game).
          </span>
        </div>
        <h3>This is an ongoing work-in-progress, but enjoy your stay! :)</h3>
      </div>
    </PublicShell>
  );
};

export default HomePage;
