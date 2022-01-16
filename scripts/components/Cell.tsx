import React, { useContext, useEffect, useState } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';
import { Participant } from '../MatchupTree'

interface CellProps {
  position: 'end' | 'start',
  callback: () => void,
  participant: Participant | null,
}

const Cell = ({ participant, position, callback, }: CellProps) => {


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

  const handleMouseEnter = () => {
    if (!participant?.id && participant?.id !== 0) return;
    highlightArrows('arrow-' + participant.id, 'arrow-highlight', true);
  }

  const handleMouseLeave = () => {
    if (!participant?.id && participant?.id !== 0) return;
    highlightArrows('arrow-' + participant.id, 'arrow-highlight', false);
  }

  /**
   * Add or remove classes from arrow and divider elements corresponding to the current id
   * to trigger to border colour transistion.
   */
  const highlightArrows = (className: string, highlightClass: string, isHighlight: boolean) => {
    let eles = document.getElementsByClassName(className);
    for (let i = 0; i < eles.length; i++) {
      if (isHighlight) {
        eles[i].classList.add(highlightClass);
      } else {
        eles[i].classList.remove(highlightClass);
      }
    }
  }

  return (
    <div className='cell-container' style={style.cellContainer}>
      {round != 1 && <Arrow position={position} id={participant?.id === undefined ? null : participant?.id} />}
      <div className={`cell cell-${position} ${participant?.skip ? 'cell-bye' : ''}`} style={style.cell} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <p style={style.participant} className='name-text'>{participant?.name || ''}</p>
      </div>
    </div>
  );
};

export default Cell;