import React from 'react';
import Link from 'next/link';

import { Button, Header } from 'semantic-ui-react';

import styles from '../styling/NavigationBar.module.css';

const tabs: string[] = ['WaniKani', 'Portfolio'];
const url = (tab: string) => {
  return `/${tab.toLowerCase().replace(/\s/g, '')}`;
};

const NavigationBar = (): JSX.Element => (
  <div className={styles.container}>
    <Link href="/" as={process.env.BACKEND_URL + '/'}>
      <Button>Placeholder Logo</Button>
    </Link>
    <div className={styles.navbar}>
      {tabs.map((tab) => {
        return (
          <Link href={url(tab)} as={process.env.BACKEND_URL + url(tab)} key={tab}>
            <a className={styles.navitem}>
              <Header as="h3">
                <span className={styles.override}>{tab}</span>
              </Header>
            </a>
          </Link>
        );
      })}
    </div>
  </div>
);

export default NavigationBar;
