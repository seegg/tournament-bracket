import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  callback: (participantNum: number, participantNames?: string[]) => void;
}

const BracketInput = ({ callback }: InputProps) => {

  const [participantNum, setparticipantNum] = useState('');
  const [participantNames, setParticipantNames] = useState('');
  const [isNumberInput, setIsNumberInput] = useState(true);

  //matches either a whole number or an empty string.
  const wholeNumberRegex = new RegExp(/(^\d+$)|(^$)/);

  const handleNumChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    if (wholeNumberRegex.test(value)) {
      setparticipantNum(value);
    };
  }

  const handleTextChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLTextAreaElement).value;
    setParticipantNames(value);
  }

  const handleClick = (): void => {
    submitParticipants();
  }

  const handleKeyPress = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      submitParticipants();
    }
  }

  //use names or number to create the bracket depending on
  //whether isNumberInput is true or false.
  const submitParticipants = () => {
    if (isNumberInput) {
      if (Number(participantNum) > 1024) {
        if (confirm(`Are you sure? Number of participants:${participantNum}`)) {
        } else {
          return;
        }
      }
      callback(Number(participantNum) || 0);
    } else {
      const nameArray = participantNames.split(/[ ,\n\r]+/);
      console.log(nameArray);
      callback(nameArray.length, nameArray);
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

  //Input and textarea for constructing the bracket.
  const input = <input style={style.input} type="text" placeholder='Number of participants' name="input" id="pariticipant-input" value={participantNum} onChange={handleNumChange} onKeyPress={handleKeyPress} />;

  const textArea = <textarea name="" id="" cols={30} rows={10} style={style.textArea} value={participantNames} onChange={handleTextChange} placeholder='Names of participants. comma, space, and new line seperated'></textarea>;

  return (
    <div className='bracket-input'>
      <button style={style.toggleButton} onClick={toggleInput}>{isNumberInput ? <>&#9660;</> : <>&#9650;</>}</button>
      {isNumberInput ? input : textArea}
      <button style={style.button} onClick={handleClick}>Go</button>
    </div>
  )

}

export default BracketInput;