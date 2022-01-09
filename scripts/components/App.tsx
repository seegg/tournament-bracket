import React, { useState, useEffect } from 'react';
import BracketInput from './Bracket-Input';
import Round from './Round';
import Bracket from './Bracket';
import { getNumberOfMathcupsInRound, makeBracket } from './BracketHelper'

const App = () => {

  const [matchups, setMatchups] = useState(0);
  const [rounds, setRounds] = useState<number[]>([4, 2, 1]);

  const inputCallback = (participantNo: number) => {
    setMatchups(getNumberOfMathcupsInRound(participantNo));
  }

  return (
    <div>
      <div>Matchup: {matchups}</div>
      <BracketInput callback={inputCallback} />
      <Bracket rounds={rounds} />
    </div>
  );
}

export default App;