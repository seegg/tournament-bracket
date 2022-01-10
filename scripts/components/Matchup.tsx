import React from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';

const Matchup = () => {

  return (
    <div className='matchup'>
      <Cell position='end' />
      <MiddleDivider />
      <Cell position='start' />
    </div >
  );

}

export default Matchup;