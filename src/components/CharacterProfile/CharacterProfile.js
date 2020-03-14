import React, { useContext } from 'react'
import { CharactersContext } from '../../contexts/CharactersContext'
import { Link, useParams } from 'react-router-dom'
import Homeworld from './Homeworld'
import CharacterProfileUrlList from './CharacterProfileUrlList'
import { filterAttr, filterFetchList } from '../../helpers/characterProfileHelper'

import './CharacterProfile.css'

const CharacterProfile = () => {
  const { data } = useContext(CharactersContext)
  const { id } = useParams()
  const char = data && data[id - 1]

  return (
    <section id="characterprofile">
      <Link to='/people'>Back to List</Link>
      <div id="container-character">
        <h1>{char.name}</h1>
        <div id="container-attribute">
          <div className="not-list">
            {filterAttr(char).map(([attr, value]) => (
              <div key={attr} className="attribute">
                <h4>{attr}</h4>
                <p>{value}</p>
              </div>
            ))}
            {
              <div className="attribute">
                <h4>Homeworld</h4>
                <Homeworld char={char}/>
              </div>
            }
          </div>
          <div className="list">
            {filterFetchList(char).map(([attr, list]) => (
              list.length
                ? <div key={attr} className="attribute">
                    <h4>{attr}</h4>
                    <ul>
                      <CharacterProfileUrlList list={list} />
                    </ul>
                  </div>
                : null
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharacterProfile
