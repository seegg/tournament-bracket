import React, { createContext } from 'react';
import Matchup from './Matchup';

interface RoundProps {
  round: number,
  numberOfMatchups?: number
};

export const RoundContext = createContext(1);

const Round = ({ round, numberOfMatchups = 0 }: RoundProps) => {

  let matchups: JSX.Element[] = [];

  let matchupNum = numberOfMatchups;
  while (round > 1) {
    matchupNum *= 2;
  }
  matchupNum -= numberOfMatchups;

  for (let i = 0; i < numberOfMatchups; i++) {
    matchups.push(<Matchup key={`round of ${round}:` + i} round={round} matchupNum={matchupNum + i} />)
  }

  return (
    <RoundContext.Provider value={round}>
      <div className='round'>
        {matchups}
      </div>
    </RoundContext.Provider>
  );
}

export default Round;