import React from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';

interface matchupProps {
  round: number,
};

const Matchup = ({ round }: matchupProps) => {

  const style = {
    container: {
      display: 'flex',
      width: 'min-content'
    }
  };

  return (
    <div className='matchup'>
      <Cell position='end' />
      <MiddleDivider />
      <Cell position='start' />
    </div >
  );

}

export default Matchup;