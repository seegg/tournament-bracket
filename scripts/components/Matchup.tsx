import React from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';

const Matchup = () => {

  const style = {
    filler: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1 1 auto'
    },

    arrow: {
      width: '2rem',
      display: 'flex',
      flexDirection: 'column' as 'column',
    },

    innerArrow: {
      width: '1.1rem',
      alignSelf: 'end',
      flex: '1',
      borderLeft: 'solid rgb(240, 160, 40) 2px',
    }
  }

  return (
    <div className='matchup'>
      <Cell position='end' />
      <MiddleDivider />
      <Cell position='start' />
    </div >
  );

}

export default Matchup;