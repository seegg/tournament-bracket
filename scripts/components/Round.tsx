import React from 'react';
import Matchup from './Matchup';

interface AppProps {
  numberOfMatchups?: number
};

const Round = ({ numberOfMatchups = 4 }: AppProps) => {

  let matchups = new Array(numberOfMatchups).fill(<Matchup />);

  return (
    <div>
      {matchups}
    </div>
  );
};

export default Round;