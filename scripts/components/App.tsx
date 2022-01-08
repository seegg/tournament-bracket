import React from 'react';
import Cell from './Cell'
import BracketInput from './Bracket-Input'

const App = () => {
  return (
    <div>
      <BracketInput />
      <Cell position='end' />
    </div>
  )
};

export default App;