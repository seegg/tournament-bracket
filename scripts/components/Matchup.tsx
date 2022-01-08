import React from 'react';
import Cell from './Cell';

const Matchup = () => {

  const style = {
    height: '5rem',
  };

  return (
    <div>
      <Cell position='end' />
      <div className='middle-divide'>
        <div></div>
        <div></div>
      </div>
      <Cell position='start' />
    </div>
  );

};

export default Matchup;