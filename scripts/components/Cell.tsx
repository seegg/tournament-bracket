import React from 'react';
import Arrow from './Arrow';

interface CellProps {
  position: 'end' | 'start',
  round?: number,
  top?: boolean,
  win?: boolean,
  winner?: boolean
}

const Cell = ({ position }: CellProps) => {

  const style = {
    cellContainer: {
      justifyContent: position,
    },
    cell: {
      alignSelf: position,
    }
  };


  return (
    <div className='cell-container' style={style.cellContainer}>
      <Arrow position={position} />
      <div className='cell' style={style.cell}></div>
    </div>
  );
};

export default Cell;