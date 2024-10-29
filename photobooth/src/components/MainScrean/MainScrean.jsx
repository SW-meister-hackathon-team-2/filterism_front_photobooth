import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainScrean.style';

const MainScrean = () => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate('/main');
  };

  return (
    <S.Wrapper>
      <S.Div color="red">
        <S.Logo src="/assets/imgs/left.png" />
        <S.Title src="/assets/imgs/midtitle.png" />
      </S.Div>
      <S.Div color="black" onClick={handleDivClick}>
        <S.MidLogo src="/assets/imgs/midlogo.png" />
        <S.Title src="/assets/imgs/midtitle.png" />
      </S.Div>
      <S.Div color="blue">
        <S.Logo src="/assets/imgs/right.png" />
        <S.Title src="/assets/imgs/rightlogo.png" />
        <S.Input type="text" maxlength="5" />
        <S.Startbutton src="/assets/imgs/startbutton.png" />
      </S.Div>
    </S.Wrapper>
  );
};

export default MainScrean;
