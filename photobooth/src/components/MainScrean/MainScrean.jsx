import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainScrean.style';
import { imageState, selectedImageState } from '../../global/image';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const MainScrean = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= 5) {
      setValue(e.target.value);
    }
  };
  const resetImageState = useResetRecoilState(imageState);
  const resetSelectedImageState = useResetRecoilState(selectedImageState);
  const setImageState = useSetRecoilState(imageState);

  useEffect(() => {
    resetImageState();
    resetSelectedImageState();
    localStorage.removeItem('recoil-persist');
  }, []);

  const handleTemButtonClick = () => {
    navigate('/template');
  };
  const handleStartButtonClick = async () => {
    if (value.length === 5) {
      try {
        const response = await fetch(
          `
https://b7e1-118-42-92-47.ngrok-free.app/api/template/${value}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': true,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log('Success:', data);
          setImageState(data.images);
          navigate('/main/result');
        } else {
          console.error('Server response was not ok:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    } else {
      console.warn('Input must be exactly 5 characters.');
    }
  };

  return (
    <S.Wrapper>
      <S.Div
        color="red"
        onClick={() => {
          navigate('/main/event');
        }}
      >
        <S.Logo src="/assets/imgs/left.png" />
        <S.Title src="/assets/imgs/midtitle.png" />
      </S.Div>
      <S.Div
        color="black"
        onClick={() => {
          navigate('/main');
        }}
      >
        <S.MidLogo src="/assets/imgs/midlogo.png" />
        <S.Title src="/assets/imgs/midtitle.png" />
      </S.Div>
      <S.Div color="blue">
        <S.Logo src="/assets/imgs/right.png" />
        <S.Title src="/assets/imgs/rightlogo.png" />
        <S.Input type="text" value={value} onChange={handleChange} maxlength="5" isMaxLength={value.length === 5} />
        <S.Startbutton src="/assets/imgs/startbutton.png" onClick={handleStartButtonClick} />
        <S.Tembutton src="/assets/imgs/tembutton.png" onClick={handleTemButtonClick} />
      </S.Div>
    </S.Wrapper>
  );
};

export default MainScrean;
