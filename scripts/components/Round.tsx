import React, { createContext, useContext } from 'react';
import Matchup from './Matchup';

interface RoundProps {
  round: number,
  numberOfMatchups?: number
};

const RoundContext = createContext({
  round: 5,
  setRound: (r: number) => { }
});

const Round = ({ round, numberOfMatchups = 0 }: RoundProps) => {

  const { setRound } = useContext(RoundContext);
  setRound(round);

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
export { RoundContext };