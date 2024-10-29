import React, { useEffect, useRef, useState } from 'react';
import * as M from './Main.style';
import { SyncLoader } from 'react-spinners';
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
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();

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

    setCountdown(0);
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (image.length === 8) {
      navigate('result');
    }
  }, [image, navigate]);

  const startCountdown = () => {
    if (countdown !== 0) return;

    setCountdown(3);

    const countdownTick = (current) => {
      if (current > 0) {
        setCountdown(current);
        setTimeout(() => countdownTick(current - 1), 1000);
      } else {
        setFlash(true);
        snapshot();
        setTimeout(() => setFlash(false), 300);
      }
    };

    countdownTick(3);
  };

  const handleWebcamLoaded = () => {
    setLoading(false);
  };

  return (
    <M.Wrapper>
      <M.SideWrapper>
        <M.Number>0{image.length === 8 ? 8 : image.length + 1}</M.Number>
      </M.SideWrapper>
      <M.CamWrapper>
        {loading && (
          <M.LoadingOverlay>
            <SyncLoader color="#36D7B7" loading={loading} size={15} />
            <M.LoadingText>Loading Camera...</M.LoadingText>
          </M.LoadingOverlay>
        )}
        {countdown > 0 && (
          <M.CountOverlay>
            <M.Countdown>{countdown}</M.Countdown>
          </M.CountOverlay>
        )}
        <Webcam
          ref={webcamRef}
          audio={false}
          width={1798}
          height={1080}
          screenshotFormat="image/jpeg"
          className="webcam"
          onUserMedia={handleWebcamLoaded}
        />
        <canvas ref={canvasRef} className="canvas" />
        {flash && <M.FlashOverlay />}
      </M.CamWrapper>
      <M.SideWrapper>
        <M.NumberOfShots src="/assets/imgs/numberofshots.png" />
        <M.TakeButton src={takePicture} onClick={startCountdown} alt="Take Picture" />
      </M.SideWrapper>
    </M.Wrapper>
  );
};

export default Main;
