import React from 'react';
import Link from 'next/link';
import { Header, Dropdown, Icon } from 'semantic-ui-react';
import { Img } from 'react-optimized-image';

import Logo from '../../assets/nyalogo3.png';

import styles from '../styling/NavigationBar.module.css';

// Helper function to create tabs.
const tabs: string[] = ['WaniKani', 'Maimai', 'Portfolio', 'About'];
const url = (tab: string) => {
  return `/${tab.toLowerCase().replace(/\s/g, '')}`;
};

// Menu icon.
const menu = <Icon name="bars" inverted size="large" />;

// Navbar.
const NavigationBar: React.FC = () => (
  <div className={styles.container}>
    <Link href="/">
      <Img src={Logo} sizes={[140]} className={styles.clickable} alt="nya-logo" />
    </Link>
    <div className={styles.navbar}>
      {tabs.map((tab) => {
        return (
          <Link href={url(tab)} key={tab}>
            <a className={styles.navitem}>
              <Header as="h3">
                <span className={styles.override}>{tab}</span>
              </Header>
            </a>
          </Link>
        );
      })}
    </div>
    <div className={styles.mininavbar}>
      <Dropdown trigger={menu} icon={null}>
        <Dropdown.Menu>
          {tabs.map((tab) => {
            return (
              <Link href={url(tab)} key={tab}>
                <Dropdown.Item text={tab} key={tab} />
              </Link>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
);

export default NavigationBar;
