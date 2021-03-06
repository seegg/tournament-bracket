import React, { useContext, useState, useEffect } from 'react';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App'
import { Participant } from '../types/types';
import { highlightArrows } from './highlight';
import CellSelect from './Cell-select';

const Winner = () => {

  const { bracket, callbacks } = useContext(BracketContext);
  const [winner, setWinner] = useState<Participant | null>(null);

  //add the setState and bracket function to the callback.
  if (bracket?.root) callbacks[bracket.root.index] = (result: Participant) => {
    setWinner(result);
    bracket.root!.value = result;
  };

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  const handleClick = (): void => {
  };

  const resetWinner = (): void => {
    if (winner?.name) {
      bracket!.root!.value = null;
      setWinner(null);
    }
  };

  return (
    <div className='round winner-round'>
      <div className='matchup'>
        <div style={style.container}>
          <Node position='end' hidden='visible' callback={resetWinner} participant={winner} />
          <MiddleDivider topId={winner?.id === undefined ? null : winner.id} btmId={winner?.id === undefined ? null : winner.id} />
          <Node position='start' hidden='hidden' callback={() => { }} />
        </div>
      </div >
    </div>
  );

}

interface NodeProps {
  position: 'start' | 'end',
  hidden: 'hidden' | 'visible',
  participant?: Participant | null,
  callback: () => void,
}

const Node = ({ position, hidden, callback, participant }: NodeProps) => {
  const style = {
    cellContainer: {
      justifyContent: position,
      visibility: hidden,
      marginLeft: '4rem',
    },
    cell: {
      alignSelf: position,
      borderWidth: '2px',
      display: 'flex',
      justifyContent: 'center',
    },
    participant: {
      alignSelf: 'center'
    }
  };

  const handleMouseEnter = () => {
    highlightArrows(participant?.id, 'arrow-highlight', 'cell-highlight', true);
  };

  const handleMouseLeave = () => {
    highlightArrows(participant?.id, 'arrow-highlight', 'cell-highlight', false);
  };

  const className = 'arrow-' + participant?.id;

  return (

    <div className='cell-container' style={style.cellContainer}>
      <div className={`border-transition cell winner ${className}`} style={style.cell} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {participant?.name && <CellSelect classNames={'cell-ctrl-del'} onClickCallback={callback} textIcon='???' />}
        <p style={style.participant} className='name-text'>{participant?.name || ''}</p>
      </div>
    </div>
  );
};

export default Winner;