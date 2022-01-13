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
  let name = ['', ''];

  // if (bracket?.tree[0]) {
  //   name[0] = bracket.tree[matchupNum * 2].value?.name!;
  //   name[1] = bracket.tree[matchupNum * 2 + 1].value?.name!;
  //   console.log('name', name);
  // }

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
        <Cell position='end' name={matchupNum + ''} />
        <MiddleDivider />
        <Cell position='start' name={name[1]} />
      </div>
    </div >
  );

}

export default Matchup;