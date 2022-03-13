import { useEffect, useState } from 'react';
import jumping from './images/jumping.gif';
import standing from './images/standing.png';

function Player({ main = false, x = 0, y = 0 }) {
  const [jump, setJump] = useState(true);

  useEffect(() => {
    setJump(true);
    setTimeout(() => {
      setJump(false);
    }, 1000);
  }, [x, y]);

  return (
    <>
      <div
        className={main ? 'player main' : 'player'}
        style={{
          marginLeft: x + 'px',
          marginTop: y + 'px',
          zIndex: main ? 2 : 1,
        }}
      >
        {jump ? <img src={jumping} /> : <img src={standing} />}
      </div>
    </>
  );
}

export default Player;
