import React, { createContext, useState, useEffect } from 'react';

export const CharactersContext = createContext();

const lens = prop => object => object[prop]
const getName = lens('name')

const CharactersContextProvider = props => {
  const [charList, setCharList] = useState([])
  const [charLinks, setCharLinks] = useState([])

  useEffect(() => {
    const links = charList.map((char, idx) => ({ name: getName(char), path: idx + 1 }))
    setCharLinks(links);
  }, [charList])

  // save charList to localStorage?
  // charNameList: pluck name and url. map over url to = / + its index + 1, then use as path in route link

  return (
    <CharactersContext.Provider value={{setCharList, charList, charLinks}}>
      {props.children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
