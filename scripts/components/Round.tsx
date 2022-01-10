import React from 'react';
import Matchup from './Matchup';

interface RoundProps {
  numberOfMatchups?: number
};

const Round = ({ numberOfMatchups = 0 }: RoundProps) => {
  let key = 1;
  let matchups: JSX.Element[] = [];

  for (let i = 0; i < numberOfMatchups; i++) {
    matchups.push(<Matchup round={i + 1} key={'round of ' + i} />)
  }

  return (
    <div className='round'>
      {matchups}
    </div>
  );
}

export default Round;