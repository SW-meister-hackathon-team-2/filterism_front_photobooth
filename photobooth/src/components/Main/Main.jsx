import React from 'react';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Div color="red">1</S.Div>
      <S.Div color="black">
        <S.MidLogo src="/assets/imgs/midlogo.png" />
        <S.Title src="/assets/imgs/midtitle.png" />
      </S.Div>
      <S.Div color="blue">3</S.Div>
    </S.Wrapper>
  );
};

export default Main;
