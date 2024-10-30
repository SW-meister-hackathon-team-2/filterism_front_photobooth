import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  justify-content: center;
  overflow-y: hidden;
`;
export const CamWrapper = styled.div`
  height: 1080px;
  width: 1798px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .webcam {
    width: 100%;
    height: auto;
  }

  .canvas {
    position: absolute;
    width: 100%;
    height: auto;
  }
`;
export const SideWrapper = styled.div`
  height: 100%;
  width: 160px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 100px;
  outline: none;
  border: 0px;
  background-color: #f2f2f2;
  margin: 10px;
`;
export const TakeButton = styled.image`
  width: 100%;
  height: 50%;
  background-color: red;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CountOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
export const LoadingText = styled.h2`
  color: white;
  font-size: 24px;
`;

export const Number = styled.h1`
  font-family: monospace;
  font-size: 96px;
  margin-left: 6px;
  margin-top: 6px;
`;

export const Countdown = styled.div`
  font-size: 100px;
  color: red;
  text-align: center;
`;
export const FlashOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  transition: opacity 0.2s ease;
  opacity: 0;
  animation: flash 0.3s forwards;

  @keyframes flash {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const NumberOfShots = styled.img`
  width: 90%;
  margin-right: 6px;
  margin-top: 6px;
`;
export const FramingImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
