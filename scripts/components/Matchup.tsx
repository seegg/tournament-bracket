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
    if (bracket?.tree[topCellIndex + 1]) {
      setTopCell(bracket.tree[topCellIndex].value);
      setBtmCell(bracket.tree[topCellIndex + 1].value);
    }
  }, []);

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  const handleClick = (cell: 'top' | 'bottom') => {
    const w = cell === 'top' ? topCell : btmCell;
    if (!w || w.skip) return;

    const parentIndex = bracket?.tree[topCellIndex].parentIndex;
    callbacks[parentIndex!]({ ...w });
  }

  return (
    <div className='matchup' >
      <div style={style.container}>
        <Cell position='end' name={topCell?.name || ''} callback={() => { handleClick('top') }} />
        <MiddleDivider />
        <Cell position='start' name={btmCell?.name || ''} callback={() => { handleClick('bottom') }} />
      </div>
    </div >
  );

}

export default Matchup;