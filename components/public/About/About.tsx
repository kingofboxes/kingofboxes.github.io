import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import { AboutToolsLibraries, AboutDeployment } from './About.data';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

const contentProps: ContentProps = {
  heading: 'About This Website',
  description: `This page documents the most important aspects about this website, such as the tools and
                libraries used to make this website, and where and how it is deployed. 
                This site now also supports mobile (after a lot of time was spent on optimisations), so check it out!`,
};

const About: NextPage = () => {
  return (
    <PublicShell title="About This Website | Justin's Website">
      <ContentHeader data={contentProps} />
      <AboutToolsLibraries />
      <AboutDeployment />
    </PublicShell>
  );
};

export default About;
