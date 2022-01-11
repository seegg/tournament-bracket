import React from 'react';
import Round from './Round';
import Winner from './Winner';

interface BracketProps {
  rounds: number[]
}

const Bracket = ({ rounds }: BracketProps) => {

  const roundMatchups = rounds.map((matchups, idx) => {
    return <Round round={idx + 1} numberOfMatchups={matchups} key={Math.random()} />
  });


  return (
    <div className='bracket'>
      {roundMatchups}
    </div>
  );
}

export default Bracket;