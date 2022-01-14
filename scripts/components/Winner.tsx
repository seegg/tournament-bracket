import React, { useContext } from 'react';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App'

const Winner = () => {

  const bracket = useContext(BracketContext);
  console.log('winner', bracket);

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
          <Node position='end' hidden='visible' callback={handleClick} name={''} />
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