import React from 'react';
import { NextPage } from 'next';

import { AboutToolsLibraries, AboutDeployment } from './About.data';
import PublicShell from '../../common/PublicShell';

const About: NextPage = () => {
  return (
    <PublicShell title="About This Website | Justin's Website">
      <h1>About This Website</h1>
      <span>
        This page documents the most important aspects about this website, such as the tools and
        libraries used to make this website, and where and how it is deployed.
      </span>
      <AboutToolsLibraries />
      <AboutDeployment />
    </PublicShell>
  );
};

export default About;
