import React from 'react';
import Round from './Round';

interface BracketProps {
  rounds: number[]
}

const Bracket = ({ rounds }: BracketProps) => {
  return (
    <div className='bracket'>
      {rounds.map((matchups, idx) => {
        return <Round round={idx + 1} numberOfMatchups={matchups} key={Math.random()} />
      })}
    </div>
  );
}

export default Bracket;