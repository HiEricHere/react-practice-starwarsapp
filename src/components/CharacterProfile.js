import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CharactersContext } from '../contexts/CharactersContext'
import CharacterProfileUrlList from './CharacterProfileUrlList'
// import { generateFetchReducer, generateDefaultState, generateComponentFactory, useFetch } from '../helpers/fetchCycle'
import { filterAttr, filterFetchList } from '../helpers/characterProfileKeys'

const CharacterProfile = () => {
  const { id } = useParams()
  const { data } = useContext(CharactersContext)
  const char = data && data[id - 1]
  console.log(char)
  // const [attrList, setAttrList] = useState([])
  // const [attrFetchList, setAttrFetchList] = useState([])
  const attrList = data && filterAttr(char)
  const attrFetchList = data && filterFetchList(char)
  // const lengthCheck = (list, component) => list.length ? component : null

  // useEffect(() => {
  //   if (char && data){
  //     setAttrList(filterAttr(char))
  //     setAttrFetchList(filterFetchList(char))
  //     console.log(attrList)
  //     console.log(attrFetchList)
  //   }
  // }, [char, data])

  return (
      <>
        { data ?
          <section>
            <h2>{char.name}</h2>
            {attrList.map(([attr, value]) => (
              <div>
                <h4>{attr}</h4>
                <p>{value}</p>
              </div>
            ))}
            {attrFetchList.map(([attr, list]) => (
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

        {/* {data ?
          <div>
            <Link to='/'>Back to List</Link>
            <h1>name: {char.name}</h1>
            <h4>height: {char.height}</h4>
            <h4>homeworld: {char.homeworld}</h4>
            <h4>species:</h4>
            <ul>
              <CharacterProfileUrlList list={char.species} />
            </ul>
            <div>
              <h4>films:</h4>
              <ul>
                <CharacterProfileUrlList list={char.films} />
              </ul>
            </div>
            { 
              char.vehicles.length
              ? <div>
                  <h4>vehicles:</h4>
                  <ul>
                    <CharacterProfileUrlList list={char.vehicles} />
                  </ul>
                </div>
              : null
            }
            {
              char.starships.length
              ? <div>
                  <h4>starships:</h4>
                  <ul>
                    <CharacterProfileUrlList list={char.starships} />
                  </ul>
                </div>
              : null
            }
          </div>
          : null
        } */}
      </>
  )
}

export default CharacterProfile
