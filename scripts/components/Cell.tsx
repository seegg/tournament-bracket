import React, { useContext, useEffect } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';
import { Participant } from '../MatchupTree'

interface CellProps {
  position: 'end' | 'start',
  callback: () => void,
  participant: Participant | null
}

const Cell = ({ participant, position, callback }: CellProps) => {


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
      <div className={`cell cell-${position} ${participant?.skip ? 'cell-bye' : ''}`} style={style.cell} onClick={handleClick}>
        <p style={style.participant} className='name-text'>{participant?.name || ''}</p>
      </div>
    </div>
  );
};

export default Cell;