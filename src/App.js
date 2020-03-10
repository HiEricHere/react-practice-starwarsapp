import React from 'react';
// import Test from './components/Test';
import People from './components/People'

import './App.css';

const url = 'https://swapi.co/api/people/';

const App = () => {
  return (
    <div id="app">
      {/* <Test/> */}
      <People startUrl={url}/>
    </div>
  );
}

export default App;
