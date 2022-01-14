import React, { useContext, useState, useEffect } from 'react';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';

interface MatchupProps {
  round: number,
  matchupNum: number
}

const Matchup = ({ round, matchupNum }: MatchupProps) => {

  const [topCell, setTopCell] = useState('');
  const [btmCell, setBtmCell] = useState('');

  const { bracket, callbacks } = useContext(BracketContext);
  let name = [matchupNum + '', ''];

  if (bracket?.tree[matchupNum * 2 + 1]) {
    name[0] = bracket.tree[matchupNum * 2].value?.name!;
    name[1] = bracket.tree[matchupNum * 2 + 1].value?.name!;
  }

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  const handleClick = () => {
    console.log(bracket?.root);
  }

  return (
    <div className='matchup' onClick={handleClick}>
      <div style={style.container}>
        <Cell position='end' name={name[0]} />
        <MiddleDivider />
        <Cell position='start' name={name[1]} />
      </div>
    </div >
  );

}

export default Matchup;