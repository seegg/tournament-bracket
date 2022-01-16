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

  const handleClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (evt.target as HTMLDivElement).classList.toggle('arrow-highlight');
  }

  return (
    <div className='arrows-container'>
      {position === 'end' && gapFiller}
      <div className='arrow-divide' onClick={handleClick} style={position === 'start' ? style.border : {}} ></div>
      <div className='arrow-divide' style={position === 'start' ? {} : style.border}></div>
      {position === 'start' && gapFiller}
    </div>
  );
}

export default Arrow;