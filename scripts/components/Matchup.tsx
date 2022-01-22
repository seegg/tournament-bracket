import React, { useContext, useState, useEffect } from 'react';
import { Participant } from '../types/types';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';
import { CellPosition } from '../types/types';
import { createSetResultFn } from './matchupHelper';

interface MatchupProps {
  matchupNum: number
}

const Matchup = ({ matchupNum }: MatchupProps) => {

  const [topCell, setTopCell] = useState<Participant | null>(null);
  const [btmCell, setBtmCell] = useState<Participant | null>(null);
  const { bracket, callbacks } = useContext(BracketContext);

  const topCellIndex = matchupNum * 2;

  // store the setResult functions to the callback array.
  callbacks[topCellIndex] = createSetResultFn(setTopCell, topCellIndex, bracket, callbacks);
  callbacks[topCellIndex + 1] = createSetResultFn(setBtmCell, topCellIndex + 1, bracket, callbacks);

  useEffect(() => {
    if (bracket?.tree[topCellIndex + 1] && !btmCell && !topCell) {
      setTopCell(bracket.tree[topCellIndex].value);
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

  const handleClick = (cell: CellPosition) => {
    const win = cell === 'end' ? topCell : btmCell;
    if (!topCell || !btmCell) return;
    if (!win || win.skip) return;
    callbacks[bracket?.tree[topCellIndex].parentIndex!]({ ...win, bye: btmCell?.skip });
  };

  //Only used in round to change participant names.
  const editCallback = (cell: CellPosition, value: string | null) => {
    const editedCell = cell === 'end' ? topCell : btmCell;
    const newCell = value === null ? null : { ...editedCell, name: value } as Participant;

    if (newCell && btmCell?.skip) newCell.bye = true;

    if (cell === 'end') {
      bracket?.setNodeValue(topCellIndex, newCell);
      setTopCell(newCell);
    } else {
      bracket?.setNodeValue(topCellIndex + 1, newCell);
      setBtmCell(newCell);
    }

    if (btmCell?.skip) {
      callbacks[bracket?.tree[topCellIndex].parentIndex!](newCell, true);
    } else {
      callbacks[bracket?.tree[topCellIndex].parentIndex!](null);
    }
  };


  return (
    <div className='matchup' >
      <div style={style.container}>
        <Cell position='end' participant={topCell} callback={handleClick} editCallback={editCallback} />
        <MiddleDivider topId={topCell?.id === undefined ? null : topCell?.id} btmId={btmCell?.id === undefined ? null : btmCell.id} />
        <Cell position='start' participant={btmCell} callback={handleClick} editCallback={editCallback} />
      </div>
    </div >
  );

};

export default Matchup;