import React, { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';

interface InputProps {
  callback: (participantNum: number, participantNames?: string[]) => void;
}

const BracketInput = ({ callback }: InputProps) => {

  const [participantNum, setparticipantNum] = useState('');
  const [participantNames, setParticipantNames] = useState('');
  const [isNumberInput, setIsNumberInput] = useState(true);

  const lastInputIsNum = useRef(true);

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

  useEffect(() => {
    //Use lstInputIsNum ref to decide whether to add or remove class
    //on number input to animate height transition.
    const btnTriangle = document.getElementById('btn-triangle');
    const textInput = document.getElementById('text-input');
    const numInput = document.getElementById('number-input');
    if (!isNumberInput) {
      btnTriangle?.classList.add('rotate-180');
      textInput?.classList.add('text-input-expand');
      lastInputIsNum.current = false;
    } else {
      btnTriangle?.classList.remove('rotate-180')
      numInput?.classList.remove('number-input-expand');
      lastInputIsNum.current = true;
    }
  }, [isNumberInput])

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
      //matches any word, hypenated word or quotes.
      const nameArray = participantNames.match(/[\w-]+|"[^"]+"/g)?.map(word => word.replace(/"/g, ''));
      callback(nameArray?.length || 0, nameArray || []);
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
  const input = <input className={`number-input input-item ${lastInputIsNum.current ? '' : 'number-input-expand'}`} type="text" placeholder='Number of participants' name="input" id="number-input" value={participantNum} onChange={handleNumChange} onKeyPress={handleKeyPress} />;

  const textArea = <textarea className='text-input input-item' name="" id="text-input" value={participantNames} onChange={handleTextChange} placeholder='Names of participants. Comma, space, and new line seperated. Combine words and add non alphanumeric characters with double quotes and hypen, "Potatos and soccer=Ball&lsquo;s" cat-dog.'></textarea>;

  return (
    <div className='bracket-input' id='b-input'>
      <button style={style.toggleButton} onClick={toggleInput}><span id='btn-triangle'>&#9660;</span></button>
      {isNumberInput ? input : textArea}
      <button style={style.button} onClick={handleClick}>Go</button>
    </div>
  )

}

export default BracketInput;