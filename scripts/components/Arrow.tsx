import React from 'react';

interface ArrowProps {
  position: 'end' | 'start'
};

const Arrow = ({ position }: ArrowProps) => {

  const arrowBorder = 'solid rgb(240, 160, 40) 2px';

  const justifyStartEnd = {
    justifyContent: position,
  };

  const alignSelf = {
    alignSelf: position
  };

  const border = {
    borderRight: arrowBorder,
    borderTop: position === 'end' ? arrowBorder : '',
    borderBottom: position === 'end' ? '' : arrowBorder
  };

  const gapFiller = <div style={{ height: '0.5rem' }}></div>;

  return (
    <div className='arrows-container'>
      {position === 'end' && gapFiller}
      <div className='arrow-divide' style={position === 'start' ? border : {}}></div>
      <div className='arrow-divide' style={position === 'start' ? {} : border}></div>
      {position === 'start' && gapFiller}
    </div>
  );
}

export default Arrow;