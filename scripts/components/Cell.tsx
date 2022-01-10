import React, { useContext } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';

interface CellProps {
  position: 'end' | 'start',
  round?: number,
  top?: boolean,
  win?: boolean,
  winner?: boolean
}

const Cell = ({ position }: CellProps) => {

  const round = useContext(RoundContext);

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
      {round != 1 && <Arrow position={position} />}
      <div className='cell' style={style.cell}></div>
    </div>
  );
};

export default Cell;