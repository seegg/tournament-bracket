interface Participant {
  name: string,
  id?: number,
  skip: boolean
}

interface Node {
  value: Participant | null;
  parentIndex: number | null;
  leftIndex: number | null;
  rightIndex: number | null;
}

//Binary tree store as an array in reverse order.
export class MatchupTree {
  tree: Node[] = [];
  root: Node | null = null;
  constructor(participantNo: number, matchups: number[]) {
    if (participantNo <= 0 || matchups.length <= 0) return;

    const totalNodes = matchups.reduce((sum, value) => sum + value * 2, 1);
    //construct the complete tree with empty nodes.
    for (let i = 0; i < totalNodes; i++) {
      let childrenIdx = this.getChildrenIndex(i, totalNodes);
      this.tree[i] = { value: null, parentIndex: this.getParentIndex(i, totalNodes), leftIndex: childrenIdx[0], rightIndex: childrenIdx[1] };
    }

    //set the root.
    this.root = this.tree[this.tree.length - 1];
    this.root.parentIndex = null;

    //set the initial round one matchups.
    let byes = matchups[0] * 2 - participantNo;
    let tempID = 1;
    for (let i = 0; i < matchups[0] * 2 - byes; i++) {
      let nodeValue: Participant = { name: 'Participant: ' + tempID, id: tempID, skip: false };
      this.tree[i] = { value: nodeValue, parentIndex: this.getParentIndex(i, totalNodes), leftIndex: null, rightIndex: null }
      tempID++;
    }

    for (let j = matchups[0] * 2 - byes; j < matchups[0] * 2; j += 2) {
      let nodeValue: Participant = { name: 'Participant: ' + tempID, id: tempID, skip: false };
      let byeValue: Participant = { name: '', skip: true };
      this.tree[j] = { value: nodeValue, parentIndex: this.getParentIndex(j, totalNodes), leftIndex: null, rightIndex: null };
      this.tree[j + 1] = { value: byeValue, leftIndex: null, rightIndex: null, parentIndex: this.getParentIndex(j + 1, totalNodes) };
    }

  }

  getNode(idx: number): Node | null {
    return this.tree[idx];
  }

  getChildrenIndex(idx: number, totalNodes: number): [number | null, number | null] {

    return [null, null];
  }

  getParentIndex(idx: number, totalNodes: number): number | null {
    return totalNodes - Math.floor((totalNodes - idx) / 2);
  }
}
