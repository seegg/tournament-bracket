import React from 'react';


interface CellSelectProps {
  onClickCallback: () => void,
  textIcon: string,
  classNames: string | null,
}

const CellSelect = ({ onClickCallback, textIcon, classNames }: CellSelectProps) => {


  return <div className={`cell-ctrl ${classNames || ''}`} onClick={onClickCallback}>{textIcon}</div>;

}

export default CellSelect;