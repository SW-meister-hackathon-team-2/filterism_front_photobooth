import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
`;

export const Div = styled.div`
  background-color: ${({ color }) => color};
  flex-grow: 1;
  width: 33.33%;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow-y: hidden;

  ${({ color }) =>
    color === 'blue' &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      border: 3px solid #36358D;
      pointer-events: none;
        }
  `}
`;

export const MidLogo = styled.img`
  padding-top: 200px;
`;

export const Title = styled.img`
  position: absolute;
  bottom: 80px;
  transform: translateX(-50%);
  left: 50%;
`;

export const Logo = styled.img`
  width: 100%;
`;