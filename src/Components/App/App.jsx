import './App.css';
import io from 'socket.io-client';

import Player from '../Player/Player';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const socket = io('http://localhost:5000');

  // useEffect(async () => {
  //   let response = await axios.get('/test');
  //   console.log(response);
  // });

  console.log(socket);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='board'>
          <Player main={true} />
          <Player />
        </div>
      </header>
    </div>
  );
}

export default App;
