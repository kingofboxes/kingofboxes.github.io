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
    {typeof data.description === 'string' && <span>{data.description}</span>}
    {typeof data.description === 'object' &&
      data.description.map((paragraph, idx) => {
        return <p key={idx}>{paragraph}</p>;
      })}
  </>
);

export default ContentHeader;
