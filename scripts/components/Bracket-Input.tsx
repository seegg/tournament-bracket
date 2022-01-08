import React, { useState, ChangeEvent } from 'react';

interface AppProps {
  callback: (participantNo: number) => void;
}

const BracketInput = ({ callback }: AppProps) => {

  const [participantNo, setParticipantNo] = useState<null | number>(null);

  //matches either a whole number or an empty string.
  const wholeNumberRegex = new RegExp(/(^\d+$)|(^$)/);

  const stuff = () => {

  }

  const handleChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    if (wholeNumberRegex.test(value)) {
      setParticipantNo(Number(value));
    };
  }

  return (
    <div className='bracket-input'>
      <input type="text" placeholder='Number of participants' name="input" id="pariticipant-input" value={participantNo || ''} onChange={handleChange} />
      <button onClick={() => { stuff() }}>Go</button>
    </div>
  )
}

export default BracketInput;