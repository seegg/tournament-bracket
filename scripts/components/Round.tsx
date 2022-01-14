import React, { createContext } from 'react';
import Matchup from './Matchup';

interface RoundProps {
  round: number,
  numberOfMatchups?: number
};

export const RoundContext = createContext(1);

const Round = ({ round, numberOfMatchups = 0 }: RoundProps) => {

  let matchups: JSX.Element[] = [];

  //Get the total number of the previous matchups
  //use this value in the Matchup component to retrive
  //the right values from the bracket context.
  let matchupNum = 0;
  let tempRound = round;
  let matchupSum = numberOfMatchups;
  while (tempRound > 1) {
    matchupSum *= 2;
    matchupNum += matchupSum;
    tempRound--;
  }

  for (let i = 0; i < numberOfMatchups; i++) {
    matchups.push(<Matchup key={`round of ${round}:` + i} matchupNum={matchupNum + i} />)
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