import { useState, useEffect, useReducer } from 'react';

const generateFetchReducer = () => {
  return (state, [type, payload]) => {
    switch(type){
      case 'FETCH_INIT':
        return {
          ...state,
          status: 'loading',
        }
      case 'FETCH_RESOLVED':
        return {
          ...state,
          status: 'resolved',
          data: payload,
        }
      case 'FETCH_ERROR':
        return {
          ...state,
          status: 'rejected',
          error: payload,
        }
      default:
        return state
    }
  }
}

const generateDefaultState = () => ({
  status: 'idle',
  error: null,
  data: null
})

const generateComponentFactory = () => {
  return (LoadingComp, ResolveComp, RejectComp, IdleComp) => status => {
    switch(status){
      case 'idle':
        return IdleComp || LoadingComp
      case 'loading':
        return LoadingComp
      case 'resolved':
        return ResolveComp
      case 'rejected':
        return RejectComp
      default:
        return IdleComp || LoadingComp
    }
  }
}

const useFetch = (defaultUrl, fetchReducer, defaultState) => {
  const [url, setUrl] = useState(defaultUrl)
  const [state, dispatch] = useReducer(fetchReducer, defaultState)

  useEffect(() => {
    let relevant = true;
    dispatch(['FETCH_INIT'])

    const fetcher = url => {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          if (relevant) dispatch(['FETCH_RESOLVED', json])
        })
        .catch(err => {
          if (relevant) dispatch(['FETCH_ERROR', err])
        })
    }
    
    fetcher(url)
    return () => relevant = false;
  })

  return [state, setUrl]
}

export { generateFetchReducer, generateDefaultState, generateComponentFactory, useFetch }