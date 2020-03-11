import React, { createContext, useEffect, useReducer, useState } from 'react'
import { generateFetchReducer, generateDefaultState } from '../helpers/fetchCycle'
export const CharactersContext = createContext()
const fetchReducer = generateFetchReducer()
const defaultState = generateDefaultState()

const CharactersContextProvider = props => {
  const [state, dispatch] = useReducer(fetchReducer, defaultState)
  const { status, data } = state
  const [ready, setReady] = useState(false)
  const url = 'https://swapi.co/api/people/'

  useEffect(() => {
    let relevant = true
    dispatch(['FETCH_INIT'])
    console.log('Commander, we\'ve entered the useEffect.')
    const fetchAllChars = (url, allChars = [], count = 0) => {
      return fetch(url)
        .then(res => res.json())
        .then(json => {
          let updatedChars = [...allChars, ...json.results]
          let progress = Math.floor((updatedChars.length/json.count) * 100)
          if (json.next && relevant) {
            url = json.next
            console.log(`Commander, scanning progress is at approximately ${progress}%.`)
            return fetchAllChars(url, updatedChars, count = updatedChars.length)
          } else {
            console.log(`Commander, this sector has been scanned ${progress}%.`)
            localStorage.setItem('swChars', JSON.stringify(updatedChars))
            dispatch(['FETCH_RESOLVED', updatedChars])
          }
        })
        .catch(err => {
          console.log(`Commander, we were only able to scan ${count} objects.`)
          if (relevant) dispatch(['FETCH_ERROR', err])
        })
    }

    const maybeList = localStorage.getItem('swChars')
    maybeList ? dispatch(['FETCH_RESOLVED', JSON.parse(maybeList)]) : fetchAllChars(url)
    console.log('peek', status, data)

    return () => {
      relevant = false
      console.log('Commander, we\'ve left the useEffect.', relevant)
    }
  }, [])

  useEffect(() => {
    if (data) setReady(true)
    console.log('d-data!', status, data)
  }, [data, status])

  return (
    <CharactersContext.Provider value={{state, ready}}>
      {props.children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
