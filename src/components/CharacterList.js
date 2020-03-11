import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CharactersContext } from '../contexts/CharactersContext'

const CharacterList = () => {
  const { state } = useContext(CharactersContext)

  return (
    <ul>
      { state.data.map((char, idx) =>
        <li key={char.name}>
          <Link to={`/people/${idx + 1}`}>{char.name}</Link> 
        </li>
      )}
    </ul>
  )
}

export default CharacterList
