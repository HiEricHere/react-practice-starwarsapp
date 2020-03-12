import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CharacterList from './CharacterList'
import CharacterProfile from './CharacterProfile/CharacterProfile'

const CharacterView = () => {
  return (
    <section>
      <Switch>
        <Route exact path='/people' component={CharacterList}/>
        <Route path='/people/:id' component={CharacterProfile} />
      </Switch>
    </section>
  )
}

export default CharacterView