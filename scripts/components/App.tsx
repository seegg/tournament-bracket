import React, { useState, useEffect } from 'react';
import BracketInput from './Bracket-Input';
import Round from './Round';
import Bracket from './Bracket';
import { getNumberOfMathcupsInRound, makeBracket } from './BracketHelper'

const App = () => {

  const [participants, setParticipants] = useState(0);
  const [rounds, setRounds] = useState<number[]>([]);

  useEffect(() => {
    if (participants > 0) {
      setRounds(makeBracket(participants))
    }
  }, [participants]);

  const inputCallback = (participantNo: number) => {
    setParticipants(participantNo);
  }


  return (
    <div className='appContainer'>
      <BracketInput callback={inputCallback} />
      <Bracket rounds={rounds} />
    </div >
  );
}

export default App;