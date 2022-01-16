import React, { useContext, useEffect, useState } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';
import { Participant } from '../MatchupTree'

interface CellProps {
  position: 'end' | 'start',
  callback: () => void,
  getArrows: () => void,
  participant: Participant | null
}

const Cell = ({ participant, position, callback, getArrows }: CellProps) => {


  const round = useContext(RoundContext);
  const [getArrow, setGetArrow] = useState(false);

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

  const handleMouseEnter = () => {
    setGetArrow(true);
  }

  const handleMouseLeave = () => {
    setGetArrow(false);
  }

  return (
    <div className='cell-container' style={style.cellContainer}>
      {round != 1 && <Arrow position={position} getArrow={getArrow} />}
      <div className={`cell cell-${position} ${participant?.skip ? 'cell-bye' : ''}`} style={style.cell} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <p style={style.participant} className='name-text'>{participant?.name || ''}</p>
      </div>
    </div>
  );
};

export default Cell;