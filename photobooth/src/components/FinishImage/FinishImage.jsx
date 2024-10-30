import React, { useState, useRef } from 'react';
import * as R from './FinishImage.style';
import { useRecoilState } from 'recoil';
import { selectedImageState } from '../../global/image';
import html2canvas from 'html2canvas';

const FinishImage = () => {
  const [selectedImages] = useRecoilState(selectedImageState);
  const today = new Date();
  const initialFormattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate()
  ).padStart(2, '0')}`;

  const [resultBackColor, setResultBackColor] = useState('white');
  const [formattedDate, setFormattedDate] = useState(initialFormattedDate);
  const [commentColor, setCommentColor] = useState('black');
  const [commentBold, setCommentBold] = useState(false);
  const [commentItal, setCommentItal] = useState(false);

  const colors = ['black', '#eeeeee', '#FEC7CD', '#50bcdf'];
  const photoRef = useRef();
  function colorHandler(color) {
    setResultBackColor(color);
  }

  const handlePrint = () => {
    if (photoRef.current) {
      html2canvas(photoRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'photo.png';
        link.click();
      });
    }
  };
  return (
    <R.Wrapper>
      <R.PhotoContainer>
        <R.PhotoWrapper ref={photoRef}>
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
        <img src="/assets/imgs/1logo.png" />
        <div>
          <img src="/assets/imgs/1text1.png" />
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
        </div>
        <div>
          <img src="/assets/imgs/1text2.png" />
          <R.CommentWrapper>
            <input type="text" value={formattedDate} onChange={(e) => setFormattedDate(e.target.value)} />
          </R.CommentWrapper>
        </div>
        <div>
          <img src="/assets/imgs/1text3.png" />
          <R.CommentOptionWrapper>
            <R.CommentOptions>
              <R.CommentOptionColor
                att="black"
                selected={commentColor === 'black'}
                onClick={() => setCommentColor('black')}
              >
                검정색
              </R.CommentOptionColor>
              <R.CommentOptionColor
                selected={commentColor === 'white'}
                att="white"
                onClick={() => setCommentColor('white')}
              >
                흰색
              </R.CommentOptionColor>{' '}
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
        </div>
        <div onClick={handlePrint}>
          <img
            src="/assets/imgs/printbuttonwhite.png"
            style={{ width: '100px', cursor: 'pointer' }}
            alt="Print Button"
          />
        </div>
      </R.ToolContainer>
    </R.Wrapper>
  );
};

export default FinishImage;
