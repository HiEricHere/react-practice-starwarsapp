import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CharactersContextProvider from './contexts/CharactersContext'
import CharacterList from './components/CharacterList'
import CharacterProfile from './components/CharacterProfile'


import './App.css';

const startUrl = 'https://swapi.co/api/people/';

const App = () => {
  return (
    <CharactersContextProvider>
      <BrowserRouter>
        <div id="app">
          <Route exact path='/'>
            <CharacterList startUrl={startUrl} />
          </Route>
          {/* <CharacterList startUrl={startUrl} /> */}
          <Route path='/people/:id' component={CharacterProfile} />
        </div>
      </BrowserRouter>
    </CharactersContextProvider>
  );
}

export default App;
