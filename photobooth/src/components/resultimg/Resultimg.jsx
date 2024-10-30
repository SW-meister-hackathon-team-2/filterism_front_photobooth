import React from 'react';
import { useRecoilState } from 'recoil';
import { imageState, selectedImageState } from '../../global/image';
import * as R from './Resultimg.style';
import { useNavigate } from 'react-router-dom';

const Result = ({ event }) => {
  const [images] = useRecoilState(imageState);
  const [selectedImages, setSelectedImages] = useRecoilState(selectedImageState);
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(image)) {
        return prevSelected.filter((img) => img !== image);
      } else {
        if (prevSelected.length < 4) {
          return [...prevSelected, image];
        }
        return prevSelected;
      }
    });
  };
  const handleNextAction = () => {
    console.log('1');
    navigate('/main/last');
  };

  const handlePrint = () => {};
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate()
  ).padStart(2, '0')}`;

  return (
    <R.Wrapper>
      <R.ResultWrapper>
        <R.ResultContent>
          {images.map((image, idx) => (
            <div>
              <R.UserImg
                key={idx}
                src={image}
                alt={`Image ${idx + 1}`}
                onClick={() => handleImageClick(image)}
                className={selectedImages.includes(image) ? 'selected' : ''}
              />
            </div>
          ))}
          <R.SelectContainer>
            <p>select photos</p>
            <p>사진을 골라주세요</p>
            <p>{selectedImages.length}/4</p>
          </R.SelectContainer>
        </R.ResultContent>
      </R.ResultWrapper>
      <R.PhotoContainer>
        <R.PhotoWrapper>
          <R.ImgContainer>
            {event == true && <R.JFrameImage src="/assets/imgs/jframe.png" alt="JFrame" />}
            <R.RelativeDiv marginTop="20px">
              <R.ImgContent src={selectedImages[0] || '/assets/imgs/testimg.png'} style={{ transform: 'scaleX(-1)' }} />
              {event == true && <R.FramingImage src="/assets/imgs/frame1.png" alt="Framing" />}
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[1] || '/assets/imgs/testimg.png'} style={{ transform: 'scaleX(-1)' }} />
              {event == true && <R.FramingImage src="/assets/imgs/frame2.png" alt="Framing" />}
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[2] || '/assets/imgs/testimg.png'} style={{ transform: 'scaleX(-1)' }} />
              {event == true && <R.FramingImage src="/assets/imgs/frame3.png" alt="Framing" />}
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[3] || '/assets/imgs/testimg.png'} style={{ transform: 'scaleX(-1)' }} />
              {event == true && <R.FramingImage src="/assets/imgs/frame4.png" alt="Framing" />}
            </R.RelativeDiv>
            <R.LogoWrapper>
              <R.Logo src="/assets/imgs/imglogo.png" />
            </R.LogoWrapper>
            <R.DateText>{formattedDate}</R.DateText>
          </R.ImgContainer>
        </R.PhotoWrapper>
      </R.PhotoContainer>
      {selectedImages.length === 4 && (
        <div>
          {event === true ? (
            <img
              src="/assets/imgs/printbutton.png"
              style={{ position: 'absolute', right: '30px', bottom: '30px', width: '100px', cursor: 'pointer' }}
              onClick={handlePrint}
              alt="Print Button"
            />
          ) : (
            <img
              src="/assets/imgs/nextbutton.png"
              style={{ position: 'absolute', right: '30px', bottom: '30px', width: '100px', cursor: 'pointer' }}
              onClick={handleNextAction}
              alt="Another Button"
            />
          )}
        </div>
      )}
    </R.Wrapper>
  );
};

export default Result;
