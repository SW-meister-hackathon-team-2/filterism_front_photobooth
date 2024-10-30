import React, { useRef } from 'react';
import * as R from './Template.style';
import RemoveImage from '../RemoveImage/RemoveImage';

const Template = ({ event }) => {
  return (
    <R.Wrapper>
      <RemoveImage />
    </R.Wrapper>
  );
};

export default Template;
