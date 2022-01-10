import React from 'react';

interface CellProps {
  position: 'end' | 'start',
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

  const border = {
    borderRight: 'solid rgb(240, 160, 40) 2px'
  }

  const gapFiller = <div style={{ height: '0.5rem' }}></div>



  return (
    <div className='cell-container' style={justifyStartEnd}>
      {<div className='arrows-container'>
        {position === 'end' && gapFiller}
        <div className='arrow-divide' style={border}></div>
        <div className='arrow-divide' style={border}></div>
        {position === 'start' && gapFiller}
      </div>}
      <div className='cell' style={alignSelf}></div>
    </div>
  );
};

export default Cell;