import React, { useContext, useState, useEffect } from 'react';
import MatchupTree from '../MatchupTree';
import { Participant } from '../types/types';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';
import { CellPosition } from '../types/types';

interface MatchupProps {
  matchupNum: number
}

const Matchup = ({ matchupNum }: MatchupProps) => {

  const [topCell, setTopCell] = useState<Participant | null>(null);
  const [btmCell, setBtmCell] = useState<Participant | null>(null);
  const { bracket, callbacks } = useContext(BracketContext);

  const topCellIndex = matchupNum * 2;

  useEffect(() => {
    if (bracket?.tree[topCellIndex + 1]) {
      setTopCell(bracket.tree[topCellIndex].value);
      setBtmCell(bracket.tree[topCellIndex + 1].value);
    }
  }, []);

  /**
   * returns a function that is stored in the callback array
   * to set the result and state of the current node.
   */
  const createSetResultFn = (dispatch: React.Dispatch<React.SetStateAction<Participant | null>>, index: number,
    bracketResult: MatchupTree | null = bracket, callbackFns: any[] = callbacks) => {
    const setResult = (result: Participant) => {
      let currentNode = bracketResult!.tree[index];
      if (result?.id === currentNode?.value?.id && result?.name === currentNode?.value?.name) return;

      dispatch(result);
      currentNode.value = result;

      //don't do anything if the value of the parent node is
      //either null or the same as the current node, otherwise 
      //set it's value to null and propagate up the chain until
      //this condition is meet.
      if (!bracket?.tree[currentNode.parentIndex!].value) return;
      if (bracket.tree[currentNode.parentIndex!].value?.id === currentNode.value?.id &&
        bracket.tree[currentNode.parentIndex!].value?.name === currentNode.value?.name) return;
      callbackFns[currentNode.parentIndex!](null);
    }

    return setResult;
  };

  //store the setResult functions to the callback array.
  callbacks[topCellIndex] = createSetResultFn(setTopCell, topCellIndex);
  callbacks[topCellIndex + 1] = createSetResultFn(setBtmCell, topCellIndex + 1);

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
    callbacks[bracket?.tree[topCellIndex].parentIndex!]({ ...win });
  };

  //Only used in round to change participant names.
  const editCallback = (cell: CellPosition, value: string | null) => {
    const editedCell = cell === 'end' ? topCell : btmCell;
    const newCell = value === null ? null : { ...editedCell, name: value } as Participant;
    if (cell === 'end') {
      setTopCell(newCell);
    } else {
      setBtmCell(newCell);
    }

    if (btmCell?.skip) {
      callbacks[bracket?.tree[topCellIndex].parentIndex!](newCell);
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