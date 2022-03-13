import './App.css';

import Player from '../Player/Player';

function App() {
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
