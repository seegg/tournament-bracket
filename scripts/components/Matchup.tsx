import React from 'react';
import Cell from './Cell';

const Matchup = () => {

  const style = {
    filler: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1 1 auto'
    },

    arrow: {
      width: '2rem',
    }
  }

  return (
    <div className='matchup'>
      <Cell position='end' />
      <div className='middle-divide'>
        <div className='arrow-filler' style={style.arrow}></div>
        <div style={style.filler}>
          <div className='middle-filler-top'></div>
          <div className='middle-filler-bottom'></div>
        </div>
      </div>
      <Cell position='start' />
    </div>
  );

}

export default Matchup;