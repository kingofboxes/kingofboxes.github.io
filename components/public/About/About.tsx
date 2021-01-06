import React from 'react';
import { NextPage } from 'next';

import PublicShell from '../../common/PublicShell';

import styles from '../../styling/About.module.css';

const About: NextPage = () => {
  return (
    <PublicShell title="About This Website | Justin's Website">
      <div className={styles.container}>
        <h1>Information about this website goes here.</h1>
      </div>
    </PublicShell>
  );
};

export default About;
