export type CellPosition = 'end' | 'start';
export interface Participant {
  name: string,
  id?: number,
  skip: boolean,
  bye?: boolean
}