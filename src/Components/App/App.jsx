import './App.css';
import io from 'socket.io-client';

import Player from '../Player/Player';
import { useEffect, useRef } from 'react';
import axios from 'axios';

function App() {
  const socket = io('http://localhost:5000');
  const gameBoard = useRef();

  socket.on('connect', () => {
    console.log(socket.id);
  });

  const handleClick = (e) => {
    const boardSpace = gameBoard.current.getBoundingClientRect();
    const mousePosition = {
      x: e.x - boardSpace.x,
      y: e.y - boardSpace.y,
    };

    console.log(mousePosition);
  };

  useEffect(async () => {
    let response = await axios.get('/test');
    console.log(response);

    gameBoard.current.addEventListener('click', handleClick);

    return () => gameBoard.current.removeEventListener('click', handleClick);
  });

  // console.log(socket);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='board' ref={gameBoard}>
          <Player main={true} />
        </div>
      </header>
    </div>
  );
}

export default App;
