import React, { useContext } from 'react'
import { CharactersContext } from '../../contexts/CharactersContext'
import { Link, useParams } from 'react-router-dom'
import Homeworld from './Homeworld'
import CharacterProfileUrlList from './CharacterProfileUrlList'
import { filterAttr, filterFetchList } from '../../helpers/CharacterProfileKeys'

const CharacterProfile = () => {
  const { data } = useContext(CharactersContext)
  const { id } = useParams()
  const char = data && data[id - 1]

  return (
    <>
      <Link to='/people'>Back to List</Link>
      <h2>{char.name}</h2>
      {filterAttr(char).map(([attr, value]) => (
        <div key={attr}>
          <h4>{attr}</h4>
          <p>{value}</p>
        </div>
      ))}
      {
        <div>
          <h4>Homeworld</h4>
          <Homeworld char={char}/>
        </div>
      }
      {filterFetchList(char).map(([attr, list]) => (
        list.length
          ? <div key={attr}>
              <h4>{attr}</h4>
              <ul>
                <CharacterProfileUrlList list={list} />
              </ul>
            </div>
          : null
      ))}
    </>
  )
}

export default CharacterProfile
