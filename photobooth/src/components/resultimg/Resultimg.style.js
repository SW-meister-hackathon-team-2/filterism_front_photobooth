import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ResultContent = styled.div`
  position: absolute;
  background-color: ${(props) => props.backColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;

  @media print {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    left: 0px;
    top: 0px;

    @page {
      margin: 0px;
    }
  }

  box-sizing: border-box;
`;

export const UserImg = styled.img`
  width: 300px;
  height: auto;
  z-index: 2;
  transition: opacity 0.3s ease;
  cursor: pointer;
  transform: scaleX(-1);

  &.selected {
    opacity: 0.7;
  }
`;

export const PhotoContainer = styled.div`
  width: 650px;
  position: relative;
  align-content: center;
`;

export const PhotoWrapper = styled.div`
  width: 300px;
  height: 854px;
  align-content: center;
  position: relative;
`;

export const Photo = styled.img`
  width: 300px;
  position: relative;
  z-index: 1;
`;

export const ImgContainer = styled.div`
  width: 300px;
  height: 853px;
  background-color: aqua;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ImgContent = styled.img`
  width: 260px;
  height: 158px;
  z-index: 6;
  position: relative;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const LogoWrapper = styled.div`
  z-index: 1;
  margin-top: 10px;
`;

export const Logo = styled.img`
  width: 170px;
`;

export const DateText = styled.p`
  color: white;
  z-index: 6;
  font-family: monospace;
`;

export const FramingImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 260px;
  height: 158px;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const JFrameImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
`;
