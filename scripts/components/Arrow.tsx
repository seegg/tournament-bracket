import React from 'react';

interface ArrowProps {
  position: 'end' | 'start'
};

const Arrow = ({ position }: ArrowProps) => {

  const arrowBorder = 'solid rgb(240, 160, 40) 2px';
  const borderRadius = '0.5rem';
  const gapFiller = <div className='gap-filler' style={{ height: '0.5rem' }}></div>;

  const style = {
    border: {
      borderRight: arrowBorder,
      borderTop: position === 'end' ? arrowBorder : '',
      borderBottom: position === 'end' ? '' : arrowBorder
    }
  };


  return (
    <div className='arrows-container'>
      {position === 'end' && gapFiller}
      <div className='arrow-divide' style={position === 'start' ? { ...style.border, borderBottomRightRadius: borderRadius } : {}}></div>
      <div className='arrow-divide' style={position === 'start' ? {} : { ...style.border, borderTopRightRadius: borderRadius }}></div>
      {position === 'start' && gapFiller}
    </div>
  );
}

export default Arrow;