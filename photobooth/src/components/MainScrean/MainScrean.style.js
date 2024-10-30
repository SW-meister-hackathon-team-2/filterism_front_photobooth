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
export const Startbutton = styled.img`
  position: absolute;
  top: 700px;
  transform: translateX(-50%);
  left: 50%;
`;
export const Tembutton = styled.img`
  position: absolute;
  top: 800px;
  transform: translateX(-50%);
  left: 50%;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Input = styled.input`
  width: 410px;
  height: 120px;
  position: absolute;
  top: 530px;
  transform: translateX(-50%);
  left: 50%;
  background-color: transparent;
  border-radius: 17px;
  box-sizing: border-box;
  padding-left: 70px;
  padding-bottom: 10px;
  font-size: 36px;
  letter-spacing: 42px;
  border: none;
  outline: none;
  color: #3a3a7a;
  caret-color: ${(props) => (props.isMaxLength ? 'transparent' : '#3a3a7a')};
`;
