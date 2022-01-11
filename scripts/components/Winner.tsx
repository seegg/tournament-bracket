import React from 'react';
import MiddleDivider from './MiddleDivider';

const Winner = () => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  return (
    <div className='round'>
      <div className='matchup'>
        <div style={style.container}>
          <Node position='end' hidden='visible' />
          <MiddleDivider />
          <Node position='start' hidden='hidden' />
        </div>
      </div >
    </div>
  );

}

interface NodeProps {
  position: 'start' | 'end',
  hidden: 'hidden' | 'visible',
}

const Node = ({ position, hidden }: NodeProps) => {
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
      <div className='cell' style={style.cell}></div>
    </div>
  );
}

export default Winner;