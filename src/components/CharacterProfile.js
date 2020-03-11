import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import {CharactersContext} from '../contexts/CharactersContext'
// import { fetchReducer, defaultState, componentFactory, useFetch } from '../helpers/fetchCycle'
// import { propFilter, toFetch } from '../helpers/CharacterProfileKeys'

// const lens = prop => object => object[prop]
const ListUrl = list => {list.map(url => <li key={url}>{url}</li>)}

const CharacterProfile = () => {
  const { id } = useParams()
  const { charList } = useContext(CharactersContext)

  const char = charList[id - 1]
  // get the char obj from the list
  // filter -> sanitize w propFilter
  // map -> over each inside toFetch
  /*     -> homeworld: name
         -> species: array of url -> name
         -> films: array of url -> title
         -> vehicles: array of url -> name
         -> spaceships: array of url -> name
    output
  */

  return (
    <section>
      <Link to='/'>Back to List</Link>
      {/* <h3>name: {char.name}</h3>
      <p>height: {char.height}</p>
      <p>homeworld: {char.homeworld}</p>
      <ul>
        <p>species:</p>
        <ListUrl list={char.species} />
      </ul>
      <ul>
        <p>films:</p>
        <ListUrl list={char.films} />
      </ul>
      <ul>
        <p>vehicles:</p>
        <ListUrl list={char.vehicles} />
      </ul>
      <ul>
        <p>spaceships:</p>
        <ListUrl list={char.spaceships} />
      </ul> */}
    </section>
  )
}

export default CharacterProfile
