import styled from 'styled-components';

export const PhotoContainer = styled.div`
  margin-left: 150px;
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

export const ImgContainer = styled.div`
  width: 300px;
  height: 853px;
  background-color: ${(props) => props.color || 'white'};

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
  color: ${(props) => props.color || 'white'};
  z-index: 6;
  font-family: monospace;
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 260px;
  height: 158px;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: lightgray;
`;

export const ToolContainer = styled.div`
  width: 600px;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
`;

export const CommentOptionWrapper = styled.div``;

export const CommentOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentOption = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  ${(props) => (props.selected ? 'border: 2px solid #0095f6;' : 'border: 1px solid #a0a0a0;')};
  cursor: pointer;
  margin: 10px 10px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentOptionColor = styled(CommentOption)`
  background-color: ${(props) => (props.att === 'black' ? 'white' : 'black')};
  color: ${(props) => props.att};
`;

export const CommentOptionBold = styled(CommentOption)`
  font-weight: bold;
`;

export const CommentOptionItal = styled(CommentOption)`
  font-style: italic;
`;

export const CommentOptionSplit = styled.div`
  margin: 0px 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const CommentWrapper = styled.div`
  > input {
    width: 100%;
    height: 30px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #a0a0a0;
    outline: none;
  }
`;

export const BasicBackWrapper = styled.div`
  width: 80%;
  h2 {
    margin-top: 25px;
  }
`;
export const BasicBacks = styled.div`
  display: flex;
  > input {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    margin: 10px 10px 10px 0px;
  }
`;
export const BasicBack = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.backColor};
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 10px 10px 0px;
`;
