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
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  return (
    <div className='matchup'>
      <div style={style.container}>
        <Cell position='end' round={round} />
        <MiddleDivider />
        <Cell position='start' round={round} />
      </div>
    </div >
  );

}

export default Matchup;