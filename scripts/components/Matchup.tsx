import React from 'react';
import Cell from './Cell';

const Matchup = () => {

  return (
    <div className='matchup'>
      <Cell position='end' />
      <div className='middle-divide'>
        <div className='middle-filler-top'></div>
        <div className='middle-filler-bottom'></div>
      </div>
      <Cell position='start' />
    </div>
  );

};

export default Matchup;