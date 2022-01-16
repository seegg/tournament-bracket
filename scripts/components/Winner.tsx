import React, { useContext, useState, useEffect } from 'react';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App'
import { Participant } from '../MatchupTree';
import { highlightArrows } from './highlight';

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
  }

  return (
    <div className='round'>
      <div className='matchup'>
        <div style={style.container}>
          <Node position='end' hidden='visible' callback={handleClick} participant={winner} />
          <MiddleDivider topId={winner?.id === undefined ? null : winner.id} btmId={winner?.id === undefined ? null : winner.id} />
          <Node position='start' hidden='hidden' />
        </div>
      </div >
    </div>
  );

}

interface NodeProps {
  position: 'start' | 'end',
  hidden: 'hidden' | 'visible',
  participant?: Participant | null,
  callback?: () => void,
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
      borderWidth: '4px',
      display: 'flex',
      justifyContent: 'center',
    },
    participant: {
      alignSelf: 'center'
    }
  };

  const handleMouseEnter = () => {
    highlightArrows(participant?.id, 'arrow-highlight', true);
  }

  const handleMouseLeave = () => {
    highlightArrows(participant?.id, 'arrow-highlight', false);
  }

  const className = 'arrow-' + participant?.id;

  return (

    <div className='cell-container' style={style.cellContainer}>
      <div className={`cell winner ${className}`} style={style.cell} onClick={callback} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p style={style.participant} className='name-text'>{participant?.name || ''}</p>
      </div>
    </div>
  );
}

export default Winner;