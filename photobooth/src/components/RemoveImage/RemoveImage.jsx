import React, { useEffect } from 'react';
import * as R from './RemoveImage.style';
import { useRecoilState } from 'recoil';
import { selectedImageState } from '../../global/image';
import axios from 'axios';

const RemoveImage = () => {
  const [selectedImages, setSelectedImages] = useRecoilState(selectedImageState);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate()
  ).padStart(2, '0')}`;

  const removeBackground = async (image) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: {
          image_file_b64: image.split(',')[1],
          size: 'auto',
        },
        headers: {
          'X-Api-Key': 'YEeqTdzDhJTGhTpthQhqtczi',
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      });

      const blob = new Blob([response.data], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    } catch (error) {
      console.error('Error removing background:', error);
      return image; // 실패 시 원본 이미지 반환
    }
  };

  useEffect(() => {
    const processImages = async () => {
      if (selectedImages.length > 0) {
        const newProcessedImages = await Promise.all(
          selectedImages.map(async (image) => {
            return await removeBackground(image);
          })
        );
        setSelectedImages(newProcessedImages); // selectedImages 상태 업데이트
      }
    };

    processImages();
  }, []);

  return (
    <R.PhotoContainer>
      <R.PhotoWrapper>
        <R.ImgContainer>
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
          <R.DateText>{formattedDate}</R.DateText>
        </R.ImgContainer>
      </R.PhotoWrapper>
    </R.PhotoContainer>
  );
};

export default RemoveImage;
