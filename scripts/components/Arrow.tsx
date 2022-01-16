import React, { useEffect } from 'react';

interface ArrowProps {
  position: 'end' | 'start'
  highlight: boolean
};

const Arrow = ({ position, highlight }: ArrowProps) => {

  const borderRadius = '0.5rem';
  const gapFiller = <div className='gap-filler' style={{ height: '0.5rem' }}></div>;

  const topId = 'top-' + Math.random();
  const btmId = 'btm-' + Math.random();

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

  console.log(document.getElementById(topId));

  useEffect(() => {
    if (highlight) {
      document.getElementById(topId)?.classList.add('arrow-highlight');
      document.getElementById(btmId)?.classList.add('arrow-highlight');
    } else {
      document.getElementById(topId)?.classList.remove('arrow-highlight');
      document.getElementById(btmId)?.classList.remove('arrow-highlight');
    }
  });

  return (
    <div className='arrows-container'>
      {position === 'end' && gapFiller}
      <div className='arrow-divide top ' id={topId} style={position === 'start' ? style.border : {}} ></div>
      <div className='arrow-divide btm ' id={btmId} style={position === 'start' ? {} : style.border}></div>
      {position === 'start' && gapFiller}
    </div>
  );
}

export default Arrow;