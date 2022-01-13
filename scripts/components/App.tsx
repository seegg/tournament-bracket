import React, { useState, useEffect, createContext } from 'react';
import BracketInput from './Bracket-Input';
import Bracket from './Bracket';
import { makeBracket } from './BracketHelper'
import { MatchupTree } from '../matchupTree';

export const BracketContext = createContext<MatchupTree | null>(null);

const App = () => {

  const [participants, setParticipants] = useState<number | null>(null);
  const [rounds, setRounds] = useState<number[]>([]);
  const [bracket, setBracket] = useState<MatchupTree | null>(null);

  useEffect(() => {
    if (!isNaN(participants!)) {
      setRounds(makeBracket(participants!))
    }
  }, [participants]);

  useEffect(() => {
    setBracket(new MatchupTree(participants!, rounds));
  }, [rounds]);

  const inputCallback = (participantNo: number) => {
    setParticipants(participantNo);
  }


  return (
    <div className='appContainer'>
      <BracketInput callback={inputCallback} />
      <BracketContext.Provider value={bracket}>
        <Bracket rounds={rounds} />
      </BracketContext.Provider>
    </div >
  );
}

export default App;