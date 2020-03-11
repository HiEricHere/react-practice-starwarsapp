import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CharactersContextProvider from './contexts/CharactersContext'
import CharacterProfile from './components/CharacterProfile'
import UserView from './components/UserView'

import './App.css';

const App = () => {
  return (
    <CharactersContextProvider>
      <BrowserRouter>
        <div id="app">
          <Route exact path='/' component={UserView}/>
          <Route path='/people/:id' component={CharacterProfile} />
        </div>
      </BrowserRouter>
    </CharactersContextProvider>
  )
}

export default App
