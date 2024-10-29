import React from 'react';
import { useRecoilState } from 'recoil';
import { imageState, selectedImageState } from '../../global/image';
import * as R from './Resultimg.style';

const Result = () => {
  const [images] = useRecoilState(imageState);
  const [selectedImages, setSelectedImages] = useRecoilState(selectedImageState);

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
  const videoConstraints = {
    facingMode: 'user',
    width: 1798,
    height: 1080,
    transform: 'scale(-1, 1)',
  };

  return (
    <R.Wrapper>
      <R.ResultWrapper>
        <R.ResultContent>
          {images.map((image, idx) => (
            <R.UserImg
              key={idx}
              src={image}
              alt={`Image ${idx + 1}`}
              onClick={() => handleImageClick(image)}
              className={selectedImages.includes(image) ? 'selected' : ''}
              style={{
                cursor: 'pointer',
                transform: 'scaleX(-1)',
              }}
            />
          ))}
        </R.ResultContent>
      </R.ResultWrapper>
      <div style={{ width: '500px' }}></div>
    </R.Wrapper>
  );
};

export default Result;
