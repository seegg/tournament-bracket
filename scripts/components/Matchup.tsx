import React, { useContext, useState, useEffect } from 'react';
import { MatchupTree, Participant } from '../MatchupTree';
import Cell from './Cell';
import MiddleDivider from './MiddleDivider';
import { BracketContext } from './App';

interface MatchupProps {
  matchupNum: number
}

const Matchup = ({ matchupNum }: MatchupProps) => {

  const [topCell, setTopCell] = useState<Participant | null>(null);
  const [btmCell, setBtmCell] = useState<Participant | null>(null);
  const [highlightArrow, setHighlightArrow] = useState(false);

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
      if (result?.id === currentNode.value?.id) return;

      dispatch(result);
      currentNode.value = result;

      //don't do anything if the value of the parent node is
      //either null or the same as the current node, otherwise 
      //set it's value to null and propagate up the chain until
      //this condition is meet.
      if (!bracket?.tree[currentNode.parentIndex!].value) return;
      if (bracket.tree[currentNode.parentIndex!].value?.id === currentNode.value?.id) return;
      callbackFns[currentNode.parentIndex!](null);
    }

    return setResult;
  }

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

  const handleClick = (cell: 'top' | 'bottom') => {
    const win = cell === 'top' ? topCell : btmCell;
    if (!topCell || !btmCell) return;
    if (!win || win.skip) return;
    callbacks[bracket?.tree[topCellIndex].parentIndex!]({ ...win });
  }

  /**
   * get the arrow and middle divider elements associated with one of the Cells and use it
   * to do the colour transistion of the arrows for the mouseEnter event.
   */
  const getArrowsCallback = () => {
    console.log('give me all your arrows');
  }

  const getMidDividerCallback = () => {

  }

  return (
    <div className='matchup' >
      <div style={style.container}>
        <Cell position='end' setHighlight={setHighlightArrow} highlight={highlightArrow} participant={topCell} callback={() => { handleClick('top') }} />
        <MiddleDivider />
        <Cell position='start' setHighlight={setHighlightArrow} highlight={highlightArrow} participant={btmCell} callback={() => { handleClick('bottom') }} />
      </div>
    </div >
  );

}

export default Matchup;