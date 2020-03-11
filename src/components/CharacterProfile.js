import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CharactersContext } from '../contexts/CharactersContext'
// import { fetchReducer, defaultState, componentFactory, useFetch } from '../helpers/fetchCycle'
// import { propFilter, toFetch } from '../helpers/CharacterProfileKeys'

// const lens = prop => object => object[prop]
const ListUrl = ({list}) => list.map(url => (<li key={url}>{url}</li>))

const CharacterProfile = () => {
  const { id } = useParams()
  const { state, ready } = useContext(CharactersContext)
  const char = ready && state.data[id - 1]

  return (
      <section>
        {ready && state.data ?
          <div>
            <Link to='/'>Back to List</Link>
            <h3>name: {char.name}</h3>
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
              <p>starships:</p>
              <ListUrl list={char.starships} />
            </ul>
          </div>
          : null
        }
      </section>
  )
}

export default CharacterProfile
