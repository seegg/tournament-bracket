import React, { useContext } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';

interface CellProps {
  position: 'end' | 'start',
  callback: () => void,
  win?: boolean,
  name?: string,
  id?: number,
  skip: boolean
}

const Cell = ({ position, name, callback, skip }: CellProps) => {

  const round = useContext(RoundContext);

  const style = {
    cellContainer: {
      justifyContent: position,
    },
    cell: {
      alignSelf: position,
      display: 'flex',
      justifyContent: 'center',
    },
    participant: {
      alignSelf: 'center'
    }
  };

  const handleClick = () => {
    callback();
  }

  return (
    <div className='cell-container' style={style.cellContainer}>
      {round != 1 && <Arrow position={position} />}
      <div className={`cell cell-${position} ${skip ? 'cell-bye' : ''}`} style={style.cell} onClick={handleClick}>
        <p style={style.participant} className='name-text'>{name}</p>
      </div>
    </div>
  );
};

export default Cell;