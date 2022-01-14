import React, { useContext, useState, useEffect } from 'react';
import { MatchupTree, Participant } from '../matchupTree';
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

  // callbacks[topCellIndex] = setTopCell;
  // callbacks[topCellIndex + 1] = setBtmCell;

  useEffect(() => {
    if (bracket?.tree[topCellIndex + 1]) {
      setTopCell(bracket.tree[topCellIndex].value);
      setBtmCell(bracket.tree[topCellIndex + 1].value);
    }
  }, []);

  const createSetResultFn = (dispatch: React.Dispatch<React.SetStateAction<Participant | null>>, index: number,
    bracketResult: MatchupTree | null = bracket, callbackFns: any[] = callbacks) => {
    const setResult = (result: Participant) => {
      dispatch(result);
      let currentNode = bracketResult!.tree[index];
      currentNode.value = result;
      console.log('created function');
      if (!bracket?.tree[currentNode.parentIndex!].value) return;
      if (bracket.tree[currentNode.parentIndex!].value?.id === currentNode.value.id) return;
      callbackFns[currentNode.parentIndex!](null);
    }

    return setResult;
  }

  callbacks[topCellIndex] = createSetResultFn(setTopCell, topCellIndex);
  callbacks[topCellIndex + 1] = createSetResultFn(setBtmCell, topCellIndex + 1);

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1'
    }
  };

  const handleClick = (cell: 'top' | 'bottom') => {
    const win = cell === 'top' ? topCell : btmCell;
    if (!win || win.skip) return;

    const parentIndex = bracket?.tree[topCellIndex].parentIndex;
    // bracket!.tree[parentIndex!].value = win;
    callbacks[parentIndex!]({ ...win });
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