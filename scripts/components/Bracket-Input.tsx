import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  callback: (participantNo: number) => void;
}

const BracketInput = ({ callback }: InputProps) => {

  const [participantNo, setParticipantNo] = useState('');

  //matches either a whole number or an empty string.
  const wholeNumberRegex = new RegExp(/(^\d+$)|(^$)/);

  const handleChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    if (wholeNumberRegex.test(value)) {
      setParticipantNo(value);
    };
  }

  const handleClick = (): void => {
    if (Number(participantNo) > 1024) {
      if (confirm(`Are you sure? Number of participants:${participantNo}`)) {
      } else {
        return;
      }
    }
    callback(Number(participantNo) || 0);
  }

  const handleKeyPress = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      if (Number(participantNo) > 1024) {
        if (confirm(`Are you sure? Number of participants:${participantNo}`)) {
        } else {
          return;
        }
      }
      callback(Number(participantNo) || 0);
    }
  }

  const style = {
    button: {
      marginLeft: '0.5rem',
    },
    input: {
      marginLeft: '0.5rem',
    }
  };

  return (
    <div className='bracket-input'>
      <input style={style.input} type="text" placeholder='Number of participants' name="input" id="pariticipant-input" value={participantNo} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button style={style.button} onClick={handleClick}>Go</button>
    </div>
  )

}

export default BracketInput;