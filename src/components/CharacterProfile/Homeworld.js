import React, { useState, useEffect } from 'react'
import { genericFetch } from '../../helpers/fetchCycle'

const resolve = json => json.name
const reject = error => `"I have a bad feeling about this..." ${error.message}`
const fetchHomeWorld = genericFetch()(resolve, reject)

const Homeworld = ({char}) => {
  const [home, setHome] = useState('Decrypting ...')
  const { homeworld } = char
  useEffect(() => {
    let relevant = true;
    fetchHomeWorld(homeworld)
      .then(result => {
        if (relevant) setHome(result)
      })
      .catch(error => setHome(`"I have a bad feeling about this..." ${error.message}`))
    return () => relevant = false;
  },[homeworld])
  return <p>{home}</p>
}

export default Homeworld