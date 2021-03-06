const getNumberOfMathcupsInRound = (participantNo: number): number => {
  if (participantNo < 1) return 0;
  if (participantNo === 1) return 1;
  return Math.pow(2, Math.ceil(logBase(participantNo)) - 1);
};

const makeBracket = (initialNumber: number): number[] => {
  let rounds: number[] = [];
  let remaining = initialNumber;
  if (remaining === 1) rounds.push(1);
  while (remaining > 1) {
    remaining = getNumberOfMathcupsInRound(remaining);
    rounds.push(remaining);
  }
  return rounds;
};


/**
 * default base 2.
 */
const logBase = (x: number, base = 2) => {
  return Math.log(x) / Math.log(base);
};

export { getNumberOfMathcupsInRound, makeBracket };