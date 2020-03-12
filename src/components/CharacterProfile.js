import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CharactersContext } from '../contexts/CharactersContext'
import CharacterProfileUrlList from './CharacterProfileUrlList'
import { genericFetch } from '../helpers/fetchCycle'
import { filterAttr, filterFetchList } from '../helpers/CharacterProfileKeys'

const unloadedFetch = genericFetch()
const resolve = json => json.name
const reject = error => `"I have a bad feeling about this..." ${error.message}`
const fetchHomeWorld = unloadedFetch(resolve, reject)

const Homeworld = ({char}) => {
  const [home, setHome] = useState('Decrypting ...')
  const { homeworld } = char
  useEffect(() => {
    fetchHomeWorld(homeworld)
      .then(result => setHome(result))
      .catch(error => setHome(`"I have a bad feeling about this..." ${error.message}`))
  },[homeworld])
  return <p>{home}</p>
}

const CharacterProfile = () => {
  const { id } = useParams()
  const { data } = useContext(CharactersContext)
  const char = data && data[id - 1]

  return (
    <>
      { data ?
        <section>
          <Link to='/'>Back to List</Link>
          <h2>{char.name}</h2>
          {filterAttr(char).map(([attr, value]) => (
            <div>
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
              ? <div>
                  <h4>{attr}</h4>
                  <ul>
                    <CharacterProfileUrlList list={list} />
                  </ul>
                </div>
              : null
          ))}
        </section>
        : null
      }
    </>
  )
}

export default CharacterProfile
