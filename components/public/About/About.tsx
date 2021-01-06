import React from 'react';
import { NextPage } from 'next';

import PublicShell from '../../common/PublicShell';

const About: NextPage = () => {
  return (
    <PublicShell title="About This Website | Justin's Website">
      <h1>About This Website</h1>
      <p>This page is still under development, check back later!</p>
    </PublicShell>
  );
};

export default About;
