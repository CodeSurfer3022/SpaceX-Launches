import React from 'react';
import Filters from './Filters';
import List from './List';

function App() {
  return (
    <div className="App">
      SpaceX Launches
      <Filters />
      <List />
    </div>
  );
}

export default App;
