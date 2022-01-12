import React, { createContext } from 'react';
import Matchup from './Matchup';

interface RoundProps {
  round: number,
  numberOfMatchups?: number
};

export const RoundContext = createContext(1);

const Round = ({ round, numberOfMatchups = 0 }: RoundProps) => {

  let key = 1;
  let matchups: JSX.Element[] = [];

  for (let i = 0; i < numberOfMatchups; i++) {
    matchups.push(<Matchup key={`round of ${round}:` + i} round={round} matchupNum={i} />)
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