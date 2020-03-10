import React, { useState, useEffect, useReducer } from 'react'
import { Fail, Loading } from './Common'

const Success = data => {
  return (
    <ul>
      {data.map(character => 
        <li key="character.name">
          {character.name}
        </li>
      )}
    </ul>
  )
}

const defaultState = {
  loading: false,
  isError: false,
  isSuccess: false,
  data: []
}

const stateReducer = (state, [type, payload]) => {
  switch(type) {
    case('FETCH_INIT'):
      return {
        ...state,
        loading: true,
        isError: false,
        isSuccess: false,
      }
    case('FETCH_SUCCESS'):
      return {
        loading: false,
        isError: false,
        isSuccess: true,
        data: payload,
      }
    case('FETCH_ERROR'):
      return {
        loading: false,
        isError: true,
        isSuccess: false,
        data: payload
      }
    default:
      return state
  }
}

const People = props => {
  const { startUrl } = props
  const [characters, setCharacters] = useState({ success: false, payload: 'Loading...' })
  // const [url, setUrl] = useState(startUrl)

  const [state, dispatch] = useReducer(stateReducer, defaultState)

  useEffect(() => {
    let relevant = true;
    console.log('init', relevant)
    const fetchAllChars = (url, allChars = []) => {
      return fetch(url)
        .then(res => res.json())
        .then(json => {
          allChars = ([...allChars, ...json.results])
          if (json.next && relevant) {
            url = json.next
            console.log(allChars)
            return fetchAllChars(url, allChars)
          } else {
            console.log('finish line', allChars)
            setCharacters({ success: true, payload: allChars })
            // return { type: true, payload: allChars }
          }
        })
        .catch(err => {
          if (relevant) {
            setCharacters({ type: false, payload: err })
            // return { type: true, payload: err }
          } 
        })
    }

    fetchAllChars(startUrl)
    return () => {
      relevant = false
      console.log('cleaned:', relevant)
    }
  }, [startUrl])

  return (
    <section>
      <ul>
        {characters.success
          ? characters.payload.map(char => 
              <li>{char.name}</li>
            )
          : <p>{characters.payload}</p>
        }
      </ul>
    </section>
  )
}

export default People
