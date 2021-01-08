import React from 'react';

import { ContentProps } from '../../types';

// Interface for content props.
interface ContentInterface {
  data: ContentProps;
}

// Content header.
const ContentHeader: React.FC<ContentInterface> = ({ data }) => (
  <>
    <h1>{data.heading}</h1>
    <span>{data.description}</span>
  </>
);

export default ContentHeader;
