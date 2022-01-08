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

  return (
    <div className='cell-container' style={justifyStartEnd}>
      <div className='cell'></div>
    </div>
  );
};

export default Cell;