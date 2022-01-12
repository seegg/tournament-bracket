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

//binary tree for the matchup results, store as an array in reverse order.
//The tree is filled bottom up.
export class MatchupTree {
  tree: Node[] = [];
  root: Node | null = null;
  constructor(participantNo: number, matchups: number[]) {
    if (!participantNo || matchups.length <= 0) return;

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
    for (let i = 0; i < (matchups[0] - byes) * 2 - byes; i++) {
      let nodeValue: Participant = { name: 'Participant: ' + tempID, id: tempID, skip: false };
      this.tree[i] = { value: nodeValue, parentIndex: this.getParentIndex(i, totalNodes), leftIndex: null, rightIndex: null }
      tempID++;
    }

    for (let j = (matchups[0] - byes) * 2; j < matchups[0] * 2; j += 2) {
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
    const left = totalNodes - ((totalNodes - 1 - idx) * 2) + 1;
    const right = totalNodes - ((totalNodes - 1 - idx) * 2);
    return [left >= 0 ? left : null, right >= 0 ? right : null];
  }

  getParentIndex(idx: number, totalNodes: number): number | null {
    const parentIdx = totalNodes - Math.floor((totalNodes - idx) / 2)
    return parentIdx < totalNodes ? parentIdx : null;
  }
}
