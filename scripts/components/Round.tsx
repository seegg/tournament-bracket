import React from 'react';
import Matchup from './Matchup';

interface RoundProps {
  numberOfMatchups?: number
};

const Round = ({ numberOfMatchups = 0 }: RoundProps) => {
  console.log('matchups', numberOfMatchups);
  let key = 1;
  let matchups: JSX.Element[] = [];

  for (let i = 0; i < numberOfMatchups; i++) {
    matchups.push(<Matchup key={'round of ' + i} />)
  }

  return (
    <div>
      {matchups}
    </div>
  );
}

export default Round;