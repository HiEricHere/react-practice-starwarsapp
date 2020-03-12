import React, { useEffect, useState, useReducer, useContext } from 'react'
import { CharactersContext } from '../contexts/CharactersContext'
import { genericFetch, generateDefaultState, generateFetchReducer, generateComponentFactory } from '../helpers/fetchCycle'

const unloadedFetch = genericFetch()
const defaultState = generateDefaultState()
const fetchReducer = generateFetchReducer()
const componentFactory = generateComponentFactory()

const Loading = () => <li><p>Decrypting ...</p></li>
const Resolved = ({results}) => results.map(item => (<li key={item}><p>{item || 'No results.'}</p></li>))
const Rejected = ({error}) => <li><p>"I have a bad feeling about this..." {error.message}</p></li>
const displayFrom = componentFactory(Loading, Resolved, Rejected)

const CharacterProfileUrlList = ({list}) => {
  const { data } = useContext(CharactersContext)
  const [state, dispatch] = useReducer(fetchReducer, defaultState)
  const { status, error } = state
  const [results, setResults] = useState([])
  const CurrentDisplay = displayFrom(status)

  const resolve = json => json.name || json.title
  const reject = err => dispatch(['FETCH_ERROR', err])

  useEffect(() => {
    let relevant = true;
    dispatch(['FETCH_INIT'])
    
    const fetchData = unloadedFetch(resolve, reject)
    const fetchMaybes = list => list.map(fetchData)

    data && Promise.all(fetchMaybes(list))
      .then(results => {
        if (relevant) {
          setResults(results)
          dispatch(['FETCH_RESOLVED'])
        }
      })
      .catch(reject)
    
    return () => relevant = false;
  },[list, data])

  return (
    <>
      {data && <CurrentDisplay results={results} error={error}/>}
    </>
  )
}

export default CharacterProfileUrlList