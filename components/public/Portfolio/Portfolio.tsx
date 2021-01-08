import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

const contentProps: ContentProps = {
  heading: 'Portfolio',
  description: 'This page is still under development, check back later!',
};

const Portfolio: NextPage = () => {
  return (
    <PublicShell title="Portfolio | Justin's Website">
      <ContentHeader data={contentProps} />
    </PublicShell>
  );
};

export default Portfolio;
