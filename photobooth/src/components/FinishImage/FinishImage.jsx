import React, { useState } from 'react';
import * as R from './FinishImage.style';
import { useRecoilState } from 'recoil';
import { selectedImageState } from '../../global/image';

const FinishImage = () => {
  const [selectedImages] = useRecoilState(selectedImageState);
  const today = new Date();
  const initialFormattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate()
  ).padStart(2, '0')}`;

  const [resultBackColor, setResultBackColor] = useState('black');
  const [resultBackImg, setResultBackImg] = useState();
  const [comment, setComment] = useState('2024년 5월 5일 어린이날');
  const [formattedDate, setFormattedDate] = useState(initialFormattedDate); // New state for the date
  const [commentColor, setCommentColor] = useState('white');
  const [commentBold, setCommentBold] = useState(false);
  const [commentItal, setCommentItal] = useState(false);

  const colors = [
    'black',
    '#eeeeee', // 흰색
    '#FEC7CD',
    '#50bcdf',
  ];
  function colorHandler(color) {
    setResultBackColor(color);
  }

  return (
    <R.Wrapper>
      <R.PhotoContainer>
        <R.PhotoWrapper>
          <R.ImgContainer color={resultBackColor}>
            <R.RelativeDiv marginTop="20px">
              <R.ImgContent src={selectedImages[0]} style={{ transform: 'scaleX(-1)' }} />
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[1]} style={{ transform: 'scaleX(-1)' }} />
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[2]} style={{ transform: 'scaleX(-1)' }} />
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[3]} style={{ transform: 'scaleX(-1)' }} />
            </R.RelativeDiv>

            <R.LogoWrapper>
              <R.Logo src="/assets/imgs/imglogo.png" />
            </R.LogoWrapper>
            <R.DateText
              color={commentColor}
              style={{ fontWeight: commentBold ? 'bold' : 'normal', fontStyle: commentItal ? 'italic' : 'normal' }}
            >
              {formattedDate}
            </R.DateText>
          </R.ImgContainer>
        </R.PhotoWrapper>
      </R.PhotoContainer>

      <R.ToolContainer>
        <R.BasicBackWrapper>
          <R.BasicBacks>
            {colors.map((i) => (
              <R.BasicBack key={i} backColor={i} onClick={() => colorHandler(i)} />
            ))}
            <input
              type="color"
              value={resultBackColor}
              placeholder="선택"
              onChange={(e) => colorHandler(e.target.value)}
            />
          </R.BasicBacks>
        </R.BasicBackWrapper>

        <R.CommentWrapper>
          <input type="text" value={formattedDate} onChange={(e) => setFormattedDate(e.target.value)} />
        </R.CommentWrapper>

        <R.CommentOptionWrapper>
          <R.CommentOptions>
            <R.CommentOptionColor
              selected={commentColor === 'black'}
              att="black"
              onClick={() => setCommentColor('black')}
            >
              검정색
            </R.CommentOptionColor>
            <R.CommentOptionColor
              att="white"
              selected={commentColor === 'white'}
              onClick={() => setCommentColor('white')}
            >
              흰색
            </R.CommentOptionColor>
            <R.CommentOptionSplit>|</R.CommentOptionSplit>
            <R.CommentOptionBold selected={commentBold} onClick={() => setCommentBold((prev) => !prev)}>
              굵게
            </R.CommentOptionBold>
            <R.CommentOptionSplit>|</R.CommentOptionSplit>
            <R.CommentOptionItal selected={commentItal} onClick={() => setCommentItal((prev) => !prev)}>
              이텔릭
            </R.CommentOptionItal>
          </R.CommentOptions>
        </R.CommentOptionWrapper>
      </R.ToolContainer>
    </R.Wrapper>
  );
};

export default FinishImage;
