const getNumberOfMathcupsInRound = (participantNo: number): number => {
  if (participantNo < 1) return 0;
  if (participantNo <= 2) return 1;
  return Math.pow(2, Math.ceil(logBase(participantNo)) - 1);
}

const makeBracket = (initialNumber: number): number[] => {
  let rounds: number[] = [];
  let remaining = initialNumber;
  let matups = getNumberOfMathcupsInRound(20);
  while (remaining > 2) {
    // console.log('matchups', matchups);
    // rounds.push(matchups);
    // remaining = matchups;
    // let matchups = remaining;
    console.log(matups);
    remaining /= 2;
  }
  return rounds;
}


/**
 * default base 2.
 */
const logBase = (x: number, base = 2) => {
  return Math.log(x) / Math.log(base);
}

export { getNumberOfMathcupsInRound, makeBracket };