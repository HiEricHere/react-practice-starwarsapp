import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CharactersContext } from '../contexts/CharactersContext'

const CharacterList = () => {
  const { data } = useContext(CharactersContext)
  const [list, setList] = useState(data)
  const [search, setSearch] = useState('')

  const handleChange = e => setSearch(e.target.value)
  const normalize = str => str.toLowerCase().replace(/[\s-]/g, '')

  useEffect(() => {
    setList(list => search.length 
      ? list.filter(({name}) => normalize(name).match(normalize(search)))
      : data)
  },[search, data])

  return (
    <>
      <label>
        <h3>Search by name</h3>
        <input type="text" onChange={handleChange}/>
      </label>
      <ul>
        { list.map(char =>
          <li key={char.name}>
            <Link to={`/people/${char.id}`}>{char.name}</Link> 
          </li>
        )}
      </ul>
    </>
  )
}

export default CharacterList
