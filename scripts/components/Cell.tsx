import React, { useContext } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';

interface CellProps {
  position: 'end' | 'start',
  win?: boolean,
  name?: string,
  id?: number
}

const Cell = ({ position, name }: CellProps) => {

  const round = useContext(RoundContext);

  const style = {
    cellContainer: {
      justifyContent: position,
    },
    cell: {
      alignSelf: position,
      display: 'flex',
      justifyContent: 'center'
    },
    participant: {
      alignSelf: 'center'
    }
  };


  return (
    <div className='cell-container' style={style.cellContainer}>
      {round != 1 && <Arrow position={position} />}
      <div className='cell' style={style.cell}>
        <p style={style.participant}>{name}</p>
      </div>
    </div>
  );
};

export default Cell;