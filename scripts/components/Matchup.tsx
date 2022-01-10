import React from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import Arrow from './Arrow';

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
      {/* <Arrow position='end' /> */}
      <div style={style.container}>
        <Cell position='end' />
        <MiddleDivider />
        <Cell position='start' />
      </div>
    </div >
  );

}

export default Matchup;