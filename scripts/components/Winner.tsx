import React, { useContext, useState, useEffect } from 'react';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App'
import { Participant } from '../matchupTree';

const Winner = () => {

  const { bracket, callbacks } = useContext(BracketContext);
  const [bob, setBob] = useState('');
  const [winner, setWinner] = useState<Participant | null>(null);

  if (bracket?.root) callbacks[bracket.root.index] = setWinner;

  // useEffect(() => {
  //   if (bracket?.root) {
  //     setWinner(bracket.root.value);
  //     console.log(bracket.root.index);
  //   }
  // }, []);

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  const handleClick = (): void => {
    if (bracket?.root) {
      console.log('roots');
    }
  }

  return (
    <div className='round'>
      <div className='matchup'>
        <div style={style.container}>
          <Node position='end' hidden='visible' callback={handleClick} name={winner?.name || ''} />
          <MiddleDivider />
          <Node position='start' hidden='hidden' />
        </div>
      </div >
    </div>
  );

}

interface NodeProps {
  name?: string | null | undefined,
  position: 'start' | 'end',
  hidden: 'hidden' | 'visible',
  callback?: () => void,
}

const Node = ({ position, hidden, callback, name }: NodeProps) => {
  const style = {
    cellContainer: {
      justifyContent: position,
      visibility: hidden,
      marginLeft: '4rem',
    },
    cell: {
      alignSelf: position,
      borderWidth: '4px'
    }
  };


  return (

    <div className='cell-container' style={style.cellContainer}>
      <div className='cell' style={style.cell} onClick={callback}>
        <p>{name || ''}</p>
      </div>
    </div>
  );
}

export default Winner;