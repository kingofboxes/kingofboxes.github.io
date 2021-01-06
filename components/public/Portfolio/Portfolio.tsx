import React from 'react';
import { NextPage } from 'next';

import PublicShell from '../../common/PublicShell';

import styles from '../../styling/Portfolio.module.css';

const Portfolio: NextPage = () => {
  return (
    <PublicShell title="Portfolio | Justin's Website">
      <div className={styles.container}>
        <h1>Currently still a work-in-progress!</h1>
      </div>
    </PublicShell>
  );
};

export default Portfolio;
