import React, { useContext } from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';

interface MatchupProps {
  round: number,
  matchupNum: number
}

const Matchup = ({ round, matchupNum }: MatchupProps) => {

  const bracket = useContext(BracketContext);

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