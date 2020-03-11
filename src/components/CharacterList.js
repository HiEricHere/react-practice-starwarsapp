import React, { useReducer, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CharactersContext } from '../contexts/CharactersContext'
import { Loading, Rejected } from './Common'
import { fetchReducer, defaultState, componentFactory } from '../helpers/fetchCycle';

// Each each li needs to wrap a <Link to={`/people/${char.path}`}></Link>
const Resolved = (list) => 
  <ul>
    { list.map(char =>
      <li key={char.name}>
        <Link to={`/people/${char.path}`}>{char.name}</Link> 
      </li>
    )}
  </ul>

const statusSwitch = componentFactory(Loading, Resolved, Rejected)

const CharacterList = ({startUrl}) => {
  const { charLinks, setCharList } = useContext(CharactersContext)
  const [state, dispatch] = useReducer(fetchReducer, defaultState)
  const currentDisplay = statusSwitch(state.status)

  useEffect(() => {
    let relevant = true;
    dispatch(['FETCH_INIT'])
    console.log('Missiles away, Commander.')
    const fetchAllChars = (url, allChars = [], count = 0) => {
      return fetch(url)
        .then(res => res.json())
        .then(json => {
          let updatedChars = [...allChars, ...json.results]
          if (json.next && relevant) {
            url = json.next
            console.log(`Commander, salvo ${count} is a confirmed hit.`)
            return fetchAllChars(url, updatedChars, count = count + 1)
          } else {
            console.log(`Commander, ${count} impacts confirmed on target.`)
            setCharList(updatedChars)
            dispatch(['FETCH_RESOLVED'])
          }
        })
        .catch(err => {
          console.log(`Commander, ${count} impact(s) on target. The rest failed to impact.`)
          if (relevant) dispatch(['FETCH_ERROR', err])
        })
    }

    fetchAllChars(startUrl)
    return () => {
      relevant = false
      console.log('relevant:', relevant)
    }
  }, [startUrl, setCharList])

  return (
      <section>
        {currentDisplay(state.error ? state.error : charLinks)}
      </section>
  )

}

export default CharacterList
