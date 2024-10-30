import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { imageState, selectedImageState, frameimageState, codeState } from '../../global/image';
import * as R from './Resultimg.style';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';

const Result = ({ event, remove, frame1 }) => {
  const [frame, setFrame] = useRecoilState(frameimageState);
  const [images] = useRecoilState(imageState);
  const [selectedImages, setSelectedImages] = useRecoilState(selectedImageState);
  const navigate = useNavigate();
  const photoRef = useRef();
  const [code] = useRecoilState(codeState);

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
    if (remove) {
      navigate('/remove');
    } else {
      navigate('/main/last');
    }
  };

  const handlePrint = async () => {
    if (photoRef.current) {
      // Add any additional styles if necessary before rendering
      // e.g., set frame[4] style dynamically if not set before

      const canvas = await html2canvas(photoRef.current, {
        useCORS: true, // Allows cross-origin images to be used
      });

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'photo.png';
      link.click();

      if (frame1 === true) {
        try {
          const response = await fetch(`https://b7e1-118-42-92-47.ngrok-free.app/api/template/${code}/use`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': true,
            },
            body: JSON.stringify({}),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Success:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate()
  ).padStart(2, '0')}`;

  return (
    <R.Wrapper>
      <R.ResultWrapper>
        <R.ResultContent>
          {images.map((image, idx) => (
            <div key={idx}>
              <R.UserImg
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
        <R.PhotoWrapper ref={photoRef}>
          <R.ImgContainer style={{ background: frame[4] ? `url(${frame[4]})` : 'white' }}>
            <R.RelativeDiv marginTop="20px">
              <R.ImgContent src={selectedImages[0]} style={{ transform: 'scaleX(-1)' }} />
              {event === true && <R.FramingImage src="/assets/imgs/frame1.png" />}
              {frame1 === true && <R.FramingImage src={frame[0]} />}
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[1]} style={{ transform: 'scaleX(-1)' }} />
              {event === true && <R.FramingImage src="/assets/imgs/frame2.png" />}
              {frame1 === true && <R.FramingImage src={frame[1]} />}
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[2]} style={{ transform: 'scaleX(-1)' }} />
              {event === true && <R.FramingImage src="/assets/imgs/frame3.png" />}
              {frame1 === true && <R.FramingImage src={frame[2]} />}
            </R.RelativeDiv>
            <R.RelativeDiv>
              <R.ImgContent src={selectedImages[3]} style={{ transform: 'scaleX(-1)' }} />
              {event === true && <R.FramingImage src="/assets/imgs/frame4.png" />}
              {frame1 === true && <R.FramingImage src={frame[3]} />}
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
          {event || frame1 ? (
            <img
              src="/assets/imgs/printbuttonwhite.png"
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
