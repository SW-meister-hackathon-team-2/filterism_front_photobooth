import React, { useEffect, useState } from 'react';
import * as R from './RemoveImage.style';
import { useRecoilState } from 'recoil';
import { selectedImageState } from '../../global/image';
import axios from 'axios';

const RemoveImage = ({ event }) => {
  const [selectedImages] = useRecoilState(selectedImageState);
  const [processedImages, setProcessedImages] = useState([]);
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
          'X-Api-Key': '5bN7adcNXatriD22PwjWSUes1',
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
        setProcessedImages(newProcessedImages);
      }
    };

    processImages();
  }, []);

  return (
    <R.PhotoContainer>
      <R.PhotoWrapper>
        <R.ImgContainer>
          {event && <R.JFrameImage src="/assets/imgs/jframe.png" alt="JFrame" />}

          <R.RelativeDiv marginTop="20px">
            <R.ImgContent src={processedImages[0] || selectedImages[0]} style={{ transform: 'scaleX(-1)' }} />
            {event && <R.FramingImage src="/assets/imgs/frame1.png" alt="Framing" />}
          </R.RelativeDiv>
          <R.RelativeDiv>
            <R.ImgContent src={processedImages[1] || selectedImages[1]} style={{ transform: 'scaleX(-1)' }} />
            {event && <R.FramingImage src="/assets/imgs/frame2.png" alt="Framing" />}
          </R.RelativeDiv>
          <R.RelativeDiv>
            <R.ImgContent src={processedImages[2] || selectedImages[2]} style={{ transform: 'scaleX(-1)' }} />
            {event && <R.FramingImage src="/assets/imgs/frame3.png" alt="Framing" />}
          </R.RelativeDiv>
          <R.RelativeDiv>
            <R.ImgContent src={processedImages[3] || selectedImages[3]} style={{ transform: 'scaleX(-1)' }} />
            {event && <R.FramingImage src="/assets/imgs/frame4.png" alt="Framing" />}
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
