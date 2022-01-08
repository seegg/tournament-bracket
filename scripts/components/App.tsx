import React, { useState } from 'react';
import BracketInput from './Bracket-Input';
import Round from './Round';

const App = () => {

  const [matchups, setMatchups] = useState(0);

  const getNumberOfMathcups = (participantNo: number): number => {
    const normalMatchups = logBase(participantNo);
    const bi = participantNo - Math.pow(normalMatchups, 2);
    return normalMatchups + bi;
  }

  const inputCallback = (participantNo: number) => {
    const matchups = getNumberOfMathcups(participantNo);
    setMatchups(matchups);
  }

  /**
   * default base 2.
   */
  const logBase = (x: number, base = 2) => {
    return Math.log(x) / Math.log(base);
  }

  return (
    <div>
      <BracketInput callback={inputCallback} />
      <Round numberOfMatchups={matchups} />
    </div>
  );
};

export default App;