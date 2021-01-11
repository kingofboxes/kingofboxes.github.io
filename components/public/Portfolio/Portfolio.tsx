import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

import {
  PortfolioEducationSkills,
  PortfolioPersonalProjects,
  PortfolioUniversityProjects,
  PortfolioEyecatch,
} from './Portfolio.data';

const contentProps: ContentProps = {
  heading: 'Portfolio',
  description: `Hello world! I'm Justin, a software developer looking for a graduate/junior role in the midst of all this chaos involving: 
                COVID-19, an economical crisis, and insane competition for literally any job in this field. 
                This section of the website will try to summarise the projects I've been involved in to give the 
                reader (you) a sense of how much experience I have.`,
};

const Portfolio: NextPage = () => {
  return (
    <PublicShell title="Portfolio | Justin's Website">
      <ContentHeader data={contentProps} />
      <PortfolioEyecatch />
      <PortfolioEducationSkills />
      <PortfolioPersonalProjects />
      <PortfolioUniversityProjects />
    </PublicShell>
  );
};

export default Portfolio;
