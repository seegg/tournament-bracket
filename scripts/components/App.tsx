import React, { useState, useEffect, createContext } from 'react';
import BracketInput from './Bracket-Input';
import Bracket from './Bracket';
import { makeBracket } from './bracketHelper';
import MatchupTree from '../MatchupTree';
import thing from '../../things.json';
import shuffle from '../shuffle';

interface BracketType {
  bracket: MatchupTree | null,
  setBracket: React.Dispatch<React.SetStateAction<MatchupTree | null>>,
  callbacks: any[]
}

export const BracketContext = createContext({
  bracket: new MatchupTree(0, [], []),
  setBracket: () => { },
  callbacks: []
} as BracketType);

const App = () => {

  const [participants, setParticipants] = useState<{ count: number, names: string[] } | null>(null);
  const [rounds, setRounds] = useState<number[]>([]);
  const [bracket, setBracket] = useState<MatchupTree | null>(null);
  const [callbacks, setCallbacks] = useState<any>([]);

  const bracketContextProviderValue = { bracket, setBracket, callbacks };

  useEffect(() => {
    if (participants) {
      if (participants.names.length > 0) {
        setBracket(new MatchupTree(participants!.count, rounds, participants.names));
      } else {
        setBracket(new MatchupTree(participants!.count, rounds, shuffle(thing.things)));
      }
    }
  }, [rounds]);

  const inputCallback = (participantNo: number, names: string[] = []) => {
    setParticipants({ count: participantNo, names: names });
    setRounds(makeBracket(participantNo));
  };


  return (
    <div className='appContainer'>
      <BracketInput callback={inputCallback} />
      <BracketContext.Provider value={bracketContextProviderValue}>
        <Bracket rounds={rounds} />
      </BracketContext.Provider>
    </div >
  );
};

export default App;