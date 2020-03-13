import React, { useState, useEffect } from 'react'
import { compose } from '../../helpers/compose'

import './Quote.css';

const random = x => Math.random() * x
const floor = x => Math.floor(x)
const floorRandom = compose(floor, random)
const randomQuote = xs => xs[floorRandom(xs.length)]

const Quote = () => {
  const quotes = [
    '"Never tell me the odds!"',
    '"Punch it, Chewie!"',
    `"Uh, we had a slight weapons malfunction, 
    but uh... everything's perfectly all right now. 
    We're fine. We're all fine here now, thank you. 
    Uh, how are you?"`,
    '"I find your lack of faith disturbing."',
    '"Search your feelings. You know it to be true."',
    '"Do, or do not. There is no try."',
    '"It\'s a trap!"',
    '"That\'s no moon..."',
    '"Great, kid. Don’t get cocky!"',
    `"Hokey religions and ancient weapons are no 
    match for a good blaster at your side, kid."`,
  ]
  const defaultQuote = 'A long time ago, in a galaxy far, far away...'
  const [quote, setQuote] = useState(defaultQuote)

  useEffect(() => {
    const quoteMachine = setInterval(() => {
      setQuote(q => randomQuote(quotes))
    }, 4500)
    return () => clearInterval(quoteMachine)
  },[quotes])

  return (
    <blockquote>
      <p>{quote}</p>
    </blockquote>
  )
}

export default Quote