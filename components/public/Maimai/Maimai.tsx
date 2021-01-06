import React from 'react';
import { NextPage } from 'next';

import PublicShell from '../../common/PublicShell';

import styles from '../../styling/Maimai.module.css';

const MaimaiDX: NextPage = () => {
  return (
    <PublicShell title="Maimai DX Song List | Justin's Website">
      <div className={styles.container}>
        <h1>Information about Maimai DX&apos;s song list goes here.</h1>
      </div>
    </PublicShell>
  );
};

export default MaimaiDX;
