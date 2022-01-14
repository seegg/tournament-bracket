import React, { useContext, useState, useEffect } from 'react';
import { Participant } from '../matchupTree';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';

interface MatchupProps {
  round: number,
  matchupNum: number
}

const Matchup = ({ round, matchupNum }: MatchupProps) => {

  const [topCell, setTopCell] = useState<Participant | null>(null);
  const [btmCell, setBtmCell] = useState<Participant | null>(null);

  const { bracket, callbacks } = useContext(BracketContext);
  let name = [matchupNum + '', ''];

  const topCellIndex = matchupNum * 2;

  callbacks[topCellIndex] = setTopCell;
  callbacks[topCellIndex + 1] = setBtmCell;

  if (bracket?.tree[topCellIndex + 1]) {
    name[0] = bracket.tree[topCellIndex].value?.name!;
    name[1] = bracket.tree[topCellIndex + 1].value?.name!;
  }

  useEffect(() => {
    if (bracket?.tree[topCellIndex]) {
      setTopCell(bracket.tree[topCellIndex].value);
    }
  }, [topCell]);

  useEffect(() => {
    if (bracket?.tree[topCellIndex + 1]) {
      setBtmCell(bracket.tree[topCellIndex + 1].value);
    }
  }, [btmCell]);

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  const handleClick = () => {
    // callbacks[2]('knob');
  }

  return (
    <div className='matchup' onClick={handleClick}>
      <div style={style.container}>
        <Cell position='end' name={topCell?.name || ''} />
        <MiddleDivider />
        <Cell position='start' name={btmCell?.name || ''} />
      </div>
    </div >
  );

}

export default Matchup;