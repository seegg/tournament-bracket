import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  callback: (participantNo: number) => void;
}

const BracketInput = ({ callback }: InputProps) => {

  const [participantNo, setParticipantNo] = useState('');
  const [isNumberInput, setIsNumberInput] = useState(true);

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

  const toggleInput = () => {
    setIsNumberInput(!isNumberInput);
  }

  const style = {
    button: {
      marginLeft: '0.5rem',
      height: '2rem',
      width: '2rem'
    },
    input: {
      marginLeft: '0.5rem',
      height: '2rem',
      fontSize: '1rem',
      maxWidth: '15rem',
      width: '100%',
      flexShrink: '1',
    },
    textArea: {
      marginLeft: '0.5rem',
      fontSize: '1rem',
      maxWidth: '15rem',
      width: '100%'
    },
    toggleButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '0.5rem',
      height: '2rem',
      width: '2rem'
    }
  };

  return (
    <div className='bracket-input'>
      <button style={style.toggleButton} onClick={toggleInput}>{isNumberInput ? <>&#9660;</> : <>&#9650;</>}</button>
      {isNumberInput ? <input style={style.input} type="text" placeholder='Number of participants' name="input" id="pariticipant-input" value={participantNo} onChange={handleChange} onKeyPress={handleKeyPress} /> :
        <textarea name="" id="" cols={30} rows={10} style={style.textArea} placeholder='Names of participants. comma, space or new line seperated'></textarea>}

      <button style={style.button} onClick={handleClick}>Go</button>
    </div>
  )

}

export default BracketInput;