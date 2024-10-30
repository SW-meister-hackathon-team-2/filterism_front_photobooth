import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainScrean.style';
import { useResetRecoilState } from 'recoil';
import { imageState, selectedImageState } from '../../global/image';

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

  useEffect(() => {
    resetImageState();
    resetSelectedImageState();
    localStorage.removeItem('recoil-persist');
  }, []);

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
        <S.Startbutton src="/assets/imgs/startbutton.png" />
      </S.Div>
    </S.Wrapper>
  );
};

export default MainScrean;
