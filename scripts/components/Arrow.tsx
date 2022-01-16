import React, { useEffect } from 'react';

interface ArrowProps {
  position: 'end' | 'start',
  id: number | null,
};

const Arrow = ({ position, id }: ArrowProps) => {

  const borderRadius = '0.5rem';
  const gapFiller = <div className='gap-filler' style={{ height: '0.5rem' }}></div>;

  const arrowClass = 'arrow-' + id;

  const style = {
    border: {
      borderRightStyle: 'solid' as 'solid',
      borderRightWidth: '2px',
      borderTopStyle: position === 'end' ? 'solid' as 'solid' : 'none' as 'none',
      borderTopWidth: position === 'end' ? '2px' : '',
      borderBottomStyle: position === 'end' ? 'none' as 'none' : 'solid' as 'solid',
      borderBottomWidth: position === 'end' ? '' : '2px',
      borderBottomRightRadius: position === 'end' ? '' : borderRadius,
      borderTopRightRadius: position === 'end' ? borderRadius : '',
    }
  };

  useEffect(() => {
  });

  return (
    <div className='arrows-container'>
      {position === 'end' && gapFiller}
      <div className={`border-transition arrow arrow-divide top ${arrowClass}`} style={position === 'start' ? style.border : {}} ></div>
      <div className={`border-transition arrow arrow-divide btm ${arrowClass}`} style={position === 'start' ? {} : style.border}></div>
      {position === 'start' && gapFiller}
    </div>
  );
}

export default Arrow;