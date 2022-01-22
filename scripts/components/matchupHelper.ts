import MatchupTree from '../MatchupTree';
import { Participant } from '../types/types';

/**
   * returns a function that is stored in the callback array
   * to set the result and state of the current node.
   */
export const createSetResultFn = (dispatch: React.Dispatch<React.SetStateAction<Participant | null>>, index: number,
  bracketResult: MatchupTree | null, callbackFns: any[]) => {
  const setResult = (result: Participant) => {
    let currentNode = bracketResult!.tree[index];
    if (result?.id === currentNode?.value?.id && result?.name === currentNode?.value?.name) return;

    dispatch(result);
    currentNode.value = result;

    //don't do anything if the value of the parent node is
    //either null or the same as the current node, otherwise 
    //set it's value to null and propagate up the chain until
    //this condition is meet.
    if (!bracketResult?.tree[currentNode.parentIndex!].value) return;
    if (bracketResult.tree[currentNode.parentIndex!].value?.id === currentNode.value?.id &&
      bracketResult.tree[currentNode.parentIndex!].value?.name === currentNode.value?.name) return;
    callbackFns[currentNode.parentIndex!](null);
  }

  return setResult;
};