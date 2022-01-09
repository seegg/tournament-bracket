import React, { useState } from 'react';
import BracketInput from './Bracket-Input';
import Round from './Round';
import { getNumberOfMathcupsInRound, makeBracket } from './BracketHelper'

const App = () => {

  const [matchups, setMatchups] = useState(0);

  const inputCallback = (participantNo: number) => {
    setMatchups(getNumberOfMathcupsInRound(participantNo));
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