import { getNumberOfMathcupsInRound, makeBracket } from './components/BracketHelper';

interface Participant {
  name: string,
  id?: number,
  skip: boolean
}

interface Node {
  value: Participant;
  parentIndex: number | null;
  leftIndex: number | null;
  rightIndex: number | null;
}

export class MatchupTree {
  tree: (Node | null)[] = [];
  constructor(participantNo: number, matchups: number[]) {
    if (participantNo <= 0 || matchups.length <= 0) return;

    this.tree = new Array(matchups.reduce((sum, value) => sum + (value * 2), 1)).fill(null);
    let byes = matchups[0] * 2 - participantNo;
    let tempID = 1;
    for (let i = 0; i < matchups[0] * 2 - byes; i++) {
      let nodeValue: Participant = { name: 'Participant: ' + tempID, id: tempID, skip: false };
      let childrenIdx = this.getChildrenIndex(i);
      this.tree[i] = { value: nodeValue, parentIndex: this.getParentIndex(i), leftIndex: childrenIdx[0], rightIndex: childrenIdx[1] }
    }

  }

  getNode(idx: number): Node | null {
    return null;
  }

  getChildrenIndex(idx: number): [number | null, number | null] {
    return [null, null];
  }

  getParentIndex(idx: number): number | null {
    return null;
  }
}
