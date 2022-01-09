import React from 'react';

interface CellProps {
  position: string,
  win?: boolean,
  winner?: boolean
}

const Cell = ({ position }: CellProps) => {

  const justifyStartEnd = {
    justifyContent: position,
  }

  const alignSelf = {
    alignSelf: position
  }

  return (
    <div className='cell-container' style={justifyStartEnd}>
      <div className='arrows-container'>
        <div className='arrow-divide'></div>
        <div className='arrow-divide'></div>
      </div>
      <div className='cell' style={alignSelf}></div>
    </div>
  );
};

export default Cell;