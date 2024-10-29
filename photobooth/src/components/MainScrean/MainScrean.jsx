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
      <S.Div color="red">1</S.Div>
      <S.Div color="black" onClick={handleDivClick}>
        <S.MidLogo src="/assets/imgs/midlogo.png" />
        <S.Title src="/assets/imgs/midtitle.png" />
      </S.Div>
      <S.Div color="blue">3</S.Div>
    </S.Wrapper>
  );
};

export default MainScrean;
