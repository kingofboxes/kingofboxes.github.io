import React from 'react';
import Link from 'next/link';

import styles from '../styling/FooterBar.module.css';

const FooterBar = (): JSX.Element => (
  <div className={styles.container}>
    <Link href="https://github.com/kingofboxes">
      <a className={styles.override}>GitHub</a>
    </Link>
  </div>
);

export default FooterBar;
