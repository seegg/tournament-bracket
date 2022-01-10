import React, { useContext } from 'react';
import { RoundContext } from './Round';

const MiddleDivider = () => {
  const round = useContext(RoundContext)
  const borderRadius = '0.5rem';
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

    innerArrow: {
      width: '1.1rem',
      alignSelf: 'end',
      flex: '1',
      borderLeft: 'solid rgb(240, 160, 40) 2px',
    }
  };

  return (
    <div className='middle-divide'>
      {round != 1 && <div className='arrow-filler' style={style.arrow}>
        <div style={{ ...style.innerArrow, borderBottom: 'solid rgb(240, 160, 40) 2px', borderBottomLeftRadius: borderRadius }}></div>
        <div style={{ ...style.innerArrow, borderTop: 'solid rgb(240, 160, 40) 2px', borderTopLeftRadius: borderRadius }}></div>
      </div>}
      <div style={style.filler}>
        <div className='middle-filler-top'></div>
        <div className='middle-filler-bottom'></div>
      </div>
    </div>);
}

export default MiddleDivider;