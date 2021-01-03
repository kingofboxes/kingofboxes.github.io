import React from 'react';
import Link from 'next/link';

import { Button } from 'semantic-ui-react';

import styles from '../styling/NavigationBar.module.css';

const NavigationBar = (): JSX.Element => (
  <div className={styles.container}>
    <Link href="/" as={process.env.BACKEND_URL + '/'}>
      <Button>Placeholder Logo</Button>
    </Link>
    <Link href="/wanikani" as={process.env.BACKEND_URL + '/wanikani'}>
      <Button>WaniKani</Button>
    </Link>
  </div>
);

export default NavigationBar;
