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

  &.selected {
    opacity: 0.7;
  }
`;
