import React, { useContext } from 'react';
import { RoundContext } from './Round';

interface MidDividerProps {
  topId: number | null,
  btmId: number | null,
}

const MiddleDivider = ({ topId, btmId }: MidDividerProps) => {
  const round = useContext(RoundContext)

  const topClassName = topId !== null ? 'arrow-' + topId : '';
  const btmClassName = btmId !== null ? 'arrow-' + btmId : '';

  const style = {
    filler: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flex: '1 1 auto'
    },

    arrow: {
      width: '2rem',
      display: 'flex',
      flexDirection: 'column' as 'column',
    },
  };

  return (
    <div className='middle-divide'>
      {round != 1 && <div className='arrow-filler' style={style.arrow}>
        <div className={`border-transition arrow inner-arrow inner-arrow-top ${topClassName}`} ></div>
        <div className={`border-transition arrow inner-arrow inner-arrow-btm ${btmClassName}`} ></div>
      </div>}
      <div style={style.filler}>
        <div className={`border-transition arrow middle-filler middle-filler-top ${topClassName + ' ' + btmClassName}`}></div>
        <div className={`border-transition arrow middle-filler middle-filler-bottom ${topClassName + ' ' + btmClassName}`}></div>
      </div>
    </div>);
};

export default MiddleDivider;