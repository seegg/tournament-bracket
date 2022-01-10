import React from 'react';
import Arrow from './Arrow';

interface CellProps {
  position: 'end' | 'start',
  round?: number,
  top?: boolean,
  win?: boolean,
  winner?: boolean
}

const Cell = ({ position, round }: CellProps) => {

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
    <div className='cell-container' style={justifyStartEnd}>
      {round != 1 && <Arrow position={position} />}
      <div className='cell' style={alignSelf}></div>
    </div>
  );
};

export default Cell;