import './App.css';
import io from 'socket.io-client';

import Player from '../Player/Player';

function App() {
  const socket = io();

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
