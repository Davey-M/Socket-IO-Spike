import './App.css';
import io from 'socket.io-client';

import Player from '../Player/Player';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

let id;

function App() {
  const gameBoard = useRef();

  const [players, setPlayers] = useState([]);

  const handleClick = (e, socket) => {
    const boardSpace = gameBoard.current.getBoundingClientRect();
    const mousePosition = {
      x: e.x - boardSpace.x,
      y: e.y - boardSpace.y,
    };

    // console.log(mousePosition);

    socket.emit('move', { ...mousePosition });
  };

  useEffect(async () => {
    // let response = await axios.get('/test');
    // console.log(response);

    const socket = io('http://localhost:5000');

    socket.on('connect', () => {
      // console.log(socket.id);
      id = socket.id;
    });

    socket.on('new-player', (players) => {
      // console.log({ players });
      setPlayers(players);
    });

    gameBoard.current.addEventListener('click', (e) => {
      handleClick(e, socket);
    });

    return () =>
      gameBoard.current.removeEventListener('click', (e) => {
        handleClick(e, socket);
      });
  }, []);

  // console.log(socket);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='board' ref={gameBoard}>
          {players.map((player, index) => {
            // console.log(player.x);
            // console.log(id);
            return (
              <Player
                key={index}
                x={player.x}
                y={player.y}
                main={id === player.id}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
