import React, { createContext, useEffect, useReducer, useState } from 'react'
import { generateFetchReducer, generateDefaultState, genericFetch } from '../helpers/fetchCycle'
import { getFirstPageData, getResultsTrack } from '../helpers/charactersContextFunctional'
export const CharactersContext = createContext()
const fetchReducer = generateFetchReducer()
const defaultState = generateDefaultState()
const fetchSomething = genericFetch()

const CharactersContextProvider = props => {
  const maybeInfo = JSON.parse(localStorage.getItem('swChars'))
  const [state, dispatch] = useReducer(fetchReducer, defaultState)
  const [data, setData] = useState(maybeInfo || null)

  const baseUrl = 'https://swapi.co/api/people/?page='
  const dispatchError = (err) => dispatch(['FETCH_ERROR', err])

  useEffect(() => {
    let relevant = true
    dispatch(['FETCH_INIT'])
    console.log('useEffect has joined the chat.')

    const fetchChars = fetchSomething(getResultsTrack, dispatchError)
    const fetchCount = fetchSomething(getFirstPageData, dispatchError)
    const fetchProcess = (baseUrl, promises = []) => {
      let page = 1
      return fetchCount(baseUrl + page)
        .then(([totalPages, pageOneResults]) => {
            promises.push(pageOneResults)
            while (page < totalPages) {
              page += 1
              promises.push(fetchChars(baseUrl + page))
            }
            return Promise.all(promises)
        })
        .catch(err => {
          if (relevant) dispatch(['FETCH_ERROR', err])
        })
    }

    const fetchAllChars = baseUrl => {
      fetchProcess(baseUrl)
        .then(results => {
          if (relevant) {
            console.log('pong')
            results = results.flat()
            localStorage.setItem('swChars', JSON.stringify(results))
            setData(results)
            dispatch(['FETCH_RESOLVED'])
          }
        })
        .catch(err => {
          if (relevant) dispatch(['FETCH_ERROR', err])
        })
    }

    data ? dispatch(['FETCH_RESOLVED']) : fetchAllChars(baseUrl)

    return () => {
      relevant = false
      console.log('useEffect has left the chat.')
    }
  }, [data])

  return (
    <CharactersContext.Provider value={{state, data}}>
      {props.children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
