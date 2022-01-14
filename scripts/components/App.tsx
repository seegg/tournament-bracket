import React, { useState, useEffect, createContext } from 'react';
import BracketInput from './Bracket-Input';
import Bracket from './Bracket';
import { makeBracket } from './BracketHelper'
import { MatchupTree } from '../matchupTree';

interface BracketType {
  bracket: MatchupTree | null,
  setBracket: React.Dispatch<React.SetStateAction<MatchupTree | null>>,
  callbacks: any[]
}

export const BracketContext = createContext({
  bracket: new MatchupTree(0, []),
  setBracket: () => { },
  callbacks: []
} as BracketType);

const App = () => {

  const [participants, setParticipants] = useState<number | null>(null);
  const [rounds, setRounds] = useState<number[]>([]);
  const [bracket, setBracket] = useState<MatchupTree | null>(null);
  const [callbacks, setCallbacks] = useState<any>([]);

  const value = { bracket, setBracket, callbacks };

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
      <BracketContext.Provider value={value}>
        <Bracket rounds={rounds} />
      </BracketContext.Provider>
    </div >
  );
}

export default App;