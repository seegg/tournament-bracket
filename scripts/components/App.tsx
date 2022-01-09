import React, { useState } from 'react';
import BracketInput from './Bracket-Input';
import Round from './Round';

const App = () => {

  const [matchups, setMatchups] = useState(0);

  const getNumberOfMathcupsInRound = (participantNo: number): number => {
    if (participantNo < 1) return 0;
    if (participantNo <= 2) return 1;
    const matchups = Math.pow(2, Math.ceil(logBase(participantNo)) - 1);
    return matchups;
  }

  const makeBracket = (initialNumber: number): number[] => {
    let rounds: number[] = [];
    let remaining = initialNumber;
    while (remaining > 2) {
      let matchups = getNumberOfMathcupsInRound(remaining);
      rounds.push(matchups);

    }
    return rounds;
  }

  const inputCallback = (participantNo: number) => {
    setMatchups(getNumberOfMathcupsInRound(participantNo));
  }

  /**
   * default base 2.
   */
  const logBase = (x: number, base = 2) => {
    return Math.log(x) / Math.log(base);
  }

  return (
    <div>
      <div>Matchup: {matchups}</div>
      <BracketInput callback={inputCallback} />
      <Round numberOfMatchups={matchups} />
    </div>
  );
}

export default App;