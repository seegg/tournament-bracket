import React, { useContext, useRef, useState, useEffect } from 'react';
import Arrow from './Arrow';
import { RoundContext } from './Round';
import { Participant } from '../types/types';
import { highlightArrows } from './highlight';
import { CellPosition } from '../types/types';

interface CellProps {
  position: CellPosition,
  callback: (pos: CellPosition) => void,
  editCallback: (pos: CellPosition, value: string) => void,
  participant: Participant | null,
}

const Cell = ({ participant, position, callback, editCallback }: CellProps) => {

  const [isInEditMode, setIsInEditMode] = useState(false);

  const highlighted = useRef(false);

  const round = useContext(RoundContext);

  const inputID = 'input-' + position + '-' + round + '-' + Math.random();

  //set focus to input element if its in edit mode.
  useEffect(() => {
    const input = document.getElementById(inputID);
    if (input) {
      input.focus();
    }
  }, [isInEditMode])

  const style = {
    cellContainer: {
      justifyContent: position,
    },
    cell: {
      alignSelf: position,
      display: 'flex',
      justifyContent: 'center',
    },
    participant: {
      alignSelf: 'center'
    }
  };

  const handleClick = () => {
    if (!participant?.id && participant?.id !== 0) return;
    if (isInEditMode) return;
    callback(position);

    //wait a certain amount of time, if a matchup is decided then
    //highlight the new cell.
    setTimeout(() => {
      if (highlighted.current) {
        highlightArrows(participant?.id, 'arrow-highlight', 'cell-highlight', true);
      }
    }, 100);

  };

  const handleMouseEnter = () => {
    highlighted.current = true;
    highlightArrows(participant?.id, 'arrow-highlight', 'cell-highlight', true);
  };

  const handleMouseLeave = () => {
    highlighted.current = false;
    highlightArrows(participant?.id, 'arrow-highlight', 'cell-highlight', false);
  };

  //allow editing of participant names on context menu but only if its the first round.
  const handleContextMenu = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
    if (round != 1) return;
    setIsInEditMode(true);
  };

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      const value = (evt.target as HTMLInputElement).value.trim();
      if (!value) {
        alert('Name can\'t be an empty string.');
        (evt.target as HTMLInputElement).value = participant!.name;
        return;
      }
      setIsInEditMode(false);
      if (value === participant?.name) return;
      editCallback(position, value);
    } else if (evt.key === 'Escape') {
      setIsInEditMode(false);
      (evt.target as HTMLInputElement).value = participant!.name;
    }
  };

  //because react doens't seem to fire the onKeyPress event for the Escape key for some reason.
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Escape') {
      setIsInEditMode(false);
      (evt.target as HTMLInputElement).value = participant!.name;
    }
  }

  //if input loose focus, exit edit mode and set value back to the original.
  const handleBlur = (evt: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsInEditMode(false);
    (evt.target as HTMLInputElement).value = participant!.name;
  };

  //class name use to highlight the border on mouse enter events.
  const hlClassName = (!participant?.id && participant?.id !== 0) ? '' : 'cell-' + participant.id;

  return (
    <div className='cell-container' style={style.cellContainer}>
      {round != 1 && <Arrow position={position} id={participant?.id === undefined ? null : participant?.id} />}
      <div className={`border-transition cell cell-${position} ${participant?.skip ? 'cell-bye' : ''} ${hlClassName}`} style={style.cell} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} onContextMenu={handleContextMenu}>
        {isInEditMode && round === 1 ?
          <input className='cell-input' type="text" name="cell-edit" id={inputID} defaultValue={participant?.name || ''} onKeyPress={handleKeyPress} onBlur={handleBlur} onKeyDown={handleKeyDown} />
          :
          <p style={style.participant} className='name-text'>{participant?.name || ''}</p>}
      </div>
    </div>
  );
};

export default Cell;