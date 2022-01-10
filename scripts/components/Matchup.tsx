import React, { useContext } from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { RoundContext } from './Round';

interface matchupProps {
  round: number,
};

const Matchup = ({ round }: matchupProps) => {
  const { round: rctx, setRound } = useContext(RoundContext);
  setRound(4);
  console.log('context', rctx);
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