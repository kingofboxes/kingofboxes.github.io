import React from 'react';
import Link from 'next/link';

import styles from '../styling/FooterBar.module.css';

const FooterBar = (): JSX.Element => (
  <div className={styles.container}>
    <Link href="https://github.com/kingofboxes">
      <a className={styles.override}>GitHub</a>
    </Link>
    <Link href="https://au.linkedin.com/in/justin-liang3">
      <a className={styles.override}>LinkedIn</a>
    </Link>
  </div>
);

export default FooterBar;
