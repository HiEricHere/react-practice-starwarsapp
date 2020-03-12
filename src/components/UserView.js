import React, { useContext } from 'react'
import { CharactersContext } from '../contexts/CharactersContext'
import CharacterList from './CharacterList'
import { Loading, Rejected } from './statusComponents'
import { generateComponentFactory } from '../helpers/fetchCycle'
const componentFactory = generateComponentFactory()
const displayFrom = componentFactory(Loading, CharacterList, Rejected)

const UserView = () => {
  const { state, data } = useContext(CharactersContext)
  const { status } = state
  const CurrentDisplay = displayFrom(status)

  return (
    <section>
      { data ? <CurrentDisplay /> : <CurrentDisplay /> }
    </section>
  )
}

export default UserView