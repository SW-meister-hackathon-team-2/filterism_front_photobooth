import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { imageState, selectedImageState } from '../../global/image';
import * as R from './Template.style';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import RemoveImage from '../RemoveImage/RemoveImage';

const Template = ({ event }) => {
  return (
    <R.Wrapper>
      <RemoveImage />
    </R.Wrapper>
  );
};

export default Template;
