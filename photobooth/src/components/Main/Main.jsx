import React, { useEffect, useRef, useState } from 'react';
import * as M from './Main.style';
import { SyncLoader } from 'react-spinners';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-webgl';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { imageState } from '../../global/image';

const Main = ({ event }) => {
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
      if (event == true) {
        navigate('result');
      } else {
        navigate('result');
      }
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

  const getFrameImage = () => {
    if (image.length === 0 || image.length === 4) {
      return '/assets/imgs/frame1.png';
    } else if (image.length === 1 || image.length === 5) {
      return '/assets/imgs/frame2.png';
    } else if (image.length === 2 || image.length === 6) {
      return '/assets/imgs/frame3.png';
    } else if (image.length === 3 || image.length === 7) {
      return '/assets/imgs/frame4.png';
    }
  };

  // Handle spacebar press
  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      startCountdown();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
          style={{ transform: 'scaleX(-1)' }}
        />
        <canvas ref={canvasRef} className="canvas" />
        {event && <M.FramingImage src={getFrameImage()} alt="Framing" />}
        {flash && <M.FlashOverlay />}
        <M.InstructionMessage>
          {countdown > 0 ? `촬영 중입니다. ${countdown}초 후 촬영됩니다.` : '스페이스바를 눌러 촬영을 시작하세요'}
        </M.InstructionMessage>
      </M.CamWrapper>
      <M.SideWrapper>
        <M.NumberOfShots src="/assets/imgs/numberofshots.png" />
        <M.Number style={{ fontSize: '30px' }}>{image.length === 8 ? 8 : image.length + 1}/8</M.Number>
      </M.SideWrapper>
    </M.Wrapper>
  );
};

export default Main;
