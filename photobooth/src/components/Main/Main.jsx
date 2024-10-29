import React, { useEffect, useRef, useState } from 'react';
import * as M from './Main.style';

import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-webgl';
import Webcam from 'react-webcam';

import takePicture from '../../assets/takePicture.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { imageState } from '../../global/image';

const Main = () => {
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const [image, setImage] = useRecoilState(imageState);

  const snapshot = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const webcam = webcamRef.current.video;

    canvas.width = webcam.videoWidth;
    canvas.height = webcam.videoHeight;

    context.drawImage(webcam, 0, 0, canvas.width, canvas.height);

    const photo = canvas.toDataURL('image/jpeg');
    console.log(photo);
    setImage((prev) => {
      console.log([...prev, photo]);
      return [...prev, photo];
    });
  };

  const navigater = useNavigate();
  useEffect(() => {
    if (image.length === 8) {
      navigater('result');
    }
  }, [image]);
  return (
    <M.Wrapper>
      <M.CamWrapper>
        <Webcam
          ref={webcamRef}
          audio={false}
          width={1280}
          height={720}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
        <canvas ref={canvasRef} className="canvas" />
      </M.CamWrapper>
      <M.ButtonWrapper>
        {/* 사진 찍기 버튼 */}
        <M.TakeButton src={takePicture} onClick={snapshot} alt="Take Picture" />
        {/* 찍은 사진을 보여주고 싶으면 아래 주석을 해제하세요 */}
        {/* {
          image.map((e, idx) => (
            <img src={e} key={idx} alt={`snapshot-${idx}`} />
          ))
        } */}
      </M.ButtonWrapper>
    </M.Wrapper>
  );
};

export default Main;
