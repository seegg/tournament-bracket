import { Participant } from './types/types';

interface Node {
  value: Participant | null;
  index: number,
  parentIndex: number | null;
  leftIndex: number | null;
  rightIndex: number | null;
  setValue?: () => {}
}

//binary tree for the matchup results, store as an array in reverse order.
//The tree is filled bottom up.
export default class MatchupTree {
  tree: Node[] = [];
  root: Node | null = null;
  constructor(participantNo: number, matchups: number[], names: string[]) {
    if (!participantNo || matchups.length <= 0) return;

    const totalNodes = matchups.reduce((sum, value) => sum + value * 2, 1);
    // construct the complete tree with empty nodes.
    for (let i = 0; i < totalNodes; i++) {
      let childrenIdx = this.getChildrenIndex(i, totalNodes);
      this.tree[i] = {
        value: null, parentIndex: this.getParentIndex(i, totalNodes),
        leftIndex: childrenIdx[0], rightIndex: childrenIdx[1],
        index: i
      };
    }

    //set the root.
    this.root = this.tree[this.tree.length - 1];
    this.root.parentIndex = null;

    //set the initial round one matchups.
    let byes = matchups[0] * 2 - participantNo;

    let tempID = 0;
    for (let i = 0; i < (matchups[0] - byes) * 2; i++) {
      let nodeValue: Participant = { name: names[tempID] || `Participant ${tempID}`, id: tempID, skip: false };
      this.tree[i] = { ...this.tree[i], value: nodeValue, leftIndex: null, rightIndex: null };
      tempID++;
    }

    //byes
    for (let j = (matchups[0] - byes) * 2; j < matchups[0] * 2; j += 2) {
      let nodeValue: Participant = { name: names[tempID] || `Participant ${tempID}`, id: tempID, skip: false, bye: true };
      let byeValue: Participant = { name: '', skip: true };
      this.tree[j] = { ...this.tree[j], value: nodeValue, leftIndex: null, rightIndex: null };
      this.tree[j + 1] = { ...this.tree[j + 1], value: byeValue, leftIndex: null, rightIndex: null };

      this.tree[this.getParentIndex(j, totalNodes)!].value = nodeValue;
      tempID++;
    }

  }

  getNode(idx: number): Node | null {
    return this.tree[idx];
  }

  setNode(idx: number, value: Participant) {
    this.tree[idx].value = value;
  }

  setRoot(value: Participant | null) {
    this.root!.value = value;
  }

  //the reverse of n*2+1 and n*2+2
  getChildrenIndex(idx: number, totalNodes: number): [number | null, number | null] {
    const baseIndex = -(totalNodes - 1) + (2 * idx);
    const left = baseIndex - 2;
    const right = baseIndex - 1;
    return [left >= 0 ? left : null, right >= 0 ? right : null];
  }

  getParentIndex(idx: number, totalNodes: number): number | null {
    const parentIdx = totalNodes - Math.floor((totalNodes - idx) / 2)
    return parentIdx < totalNodes ? parentIdx : null;
  }

  clone() {
    let clone = new MatchupTree(0, [], []);
    clone.tree = this.tree;
    clone.root = this.root;
    return clone;
  }
}
