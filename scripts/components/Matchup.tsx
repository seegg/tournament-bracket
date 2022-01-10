import React from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';

const Matchup = () => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  return (
    <div className='matchup'>
      <div style={style.container}>
        <Cell position='end' />
        <MiddleDivider />
        <Cell position='start' />
      </div>
    </div >
  );

}

export default Matchup;