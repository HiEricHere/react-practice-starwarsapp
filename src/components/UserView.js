import React, { useContext } from 'react'
import { CharactersContext } from '../contexts/CharactersContext'
import CharacterView from './CharacterView'
import { Loading, Rejected } from './statusComponents'
import { generateComponentFactory } from '../helpers/fetchCycle'

const componentFactory = generateComponentFactory()
const displayFrom = componentFactory(Loading, CharacterView, Rejected)

const UserView = () => {
  const { state } = useContext(CharactersContext)
  const { status } = state
  const CurrentDisplay = displayFrom(status)

  return (
    <section id="userview">
      <CurrentDisplay />
    </section>
  )
}

export default UserView