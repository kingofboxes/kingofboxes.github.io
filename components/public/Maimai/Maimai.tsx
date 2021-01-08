import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

const contentProps: ContentProps = {
  heading: 'Maimai DX Song List',
  description: 'This page is still under development, check back later!',
};

const MaimaiDX: NextPage = () => {
  return (
    <PublicShell title="Maimai DX Song List | Justin's Website">
      <ContentHeader data={contentProps} />
    </PublicShell>
  );
};

export default MaimaiDX;
