import React from 'react';
import * as R from './SelectTem.style';
import { useNavigate } from 'react-router-dom';

const SelectTem = () => {
  const navigate = useNavigate();

  const handleNextAction = (direction) => {
    if (direction === 'left') {
      navigate('/main/template/filter');
    } else {
      navigate('/main/template/guide');
    }
  };
  return (
    <R.Wrapper>
      <R.Container>
        <img src="/assets/imgs/tem1.png" />
        <div style={{ display: 'flex' }}>
          <div onClick={() => handleNextAction('left')} style={{ margin: '0 25px', cursor: 'pointer' }}>
            <img src="/assets/imgs/tem2.png" />
          </div>
          <div onClick={() => handleNextAction('right')} style={{ margin: '0 25px', cursor: 'pointer' }}>
            <img src="/assets/imgs/tem3.png" />
          </div>
        </div>
      </R.Container>
    </R.Wrapper>
  );
};

export default SelectTem;
