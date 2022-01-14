import React, { useContext, useState, useEffect } from 'react';
import { Participant } from '../matchupTree';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';

interface MatchupProps {
  matchupNum: number
}

const Matchup = ({ matchupNum }: MatchupProps) => {

  const [topCell, setTopCell] = useState<Participant | null>(null);
  const [btmCell, setBtmCell] = useState<Participant | null>(null);

  const { bracket, callbacks } = useContext(BracketContext);

  const topCellIndex = matchupNum * 2;

  callbacks[topCellIndex] = setTopCell;
  callbacks[topCellIndex + 1] = setBtmCell;

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

  const handleClick = (cell: 'top' | 'bottom') => {
    // callbacks[2]('knob');
    console.log(cell);
  }

  return (
    <div className='matchup' >
      <div style={style.container}>
        <Cell position='end' name={topCell?.name || ''} />
        <MiddleDivider />
        <Cell position='start' name={btmCell?.name || ''} />
      </div>
    </div >
  );

}

export default Matchup;