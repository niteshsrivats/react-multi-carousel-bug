import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ChevronLeft from '../../assets/svgs/ic_chevron_left_24px.svg';
import ChevronRight from '../../assets/svgs/ic_chevron_right_24px.svg';

const SliderButtons = ({ onNext, onPrevious, next, previous }) => {
  const buttonStyle = { borderColor: '#FFF', padding: '4px' };
  const chevronStyle = { fill: '#FFFFFF', height: '32px', width: '32px' };

  return (
    <>
      <ButtonGroup color={'secondary'} style={{ position: 'absolute', top: 0, right: 0 }} variant={'contained'}>
        <Button
          onClick={() => {
            // onPrevious();
            previous();
          }}
          style={buttonStyle}
        >
          <ChevronLeft style={chevronStyle} />
        </Button>
        <Button
          onClick={() => {
            // onNext();
            next();
          }}
          style={buttonStyle}
        >
          <ChevronRight style={chevronStyle} />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default SliderButtons;
