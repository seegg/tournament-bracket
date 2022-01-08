import React from 'react';
import Matchup from './Matchup';

interface RoundProps {
  numberOfMatchups?: number
};

const Round = ({ numberOfMatchups = 4 }: RoundProps) => {

  let matchups = new Array(numberOfMatchups).fill(<Matchup />);

  return (
    <div>
      {matchups}
    </div>
  );
};

export default Round;