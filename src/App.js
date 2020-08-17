import React from 'react';
import Filters from './Filters';
import List from './List';

function App() {
  return (
    <div className="App">
        <header>
            SpaceX Launches
        </header>
        <div className="main">
            <Filters />
            <List />
        </div>
        <footer>
            Developed by Chandra.
        </footer>
    </div>
  );
}

export default App;
