import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CharactersContextProvider from './contexts/CharactersContext'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import UserView from './components/UserView'

import './App.css';

const App = () => {
  return (
    <CharactersContextProvider>
      <BrowserRouter>
        <div id="app">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/people' component={UserView}/>
          </Switch>
        </div>
      </BrowserRouter>
    </CharactersContextProvider>
  )
}

export default App
