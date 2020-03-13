import React, { useState, useEffect } from 'react'
import { compose } from '../../helpers/compose'

import './Quote.css';

const random = x => Math.random() * x
const floor = x => Math.floor(x)
const floorRandom = compose(floor, random)
const randomQuote = xs => xs[floorRandom(xs.length)]

const Quote = () => {
  const quotes = [
    {quote: '"Never tell me the odds!"', author: 'Han Solo'},
    {quote: '"Punch it, Chewie!"', author: 'Han Solo'},
    {quote: `"Uh, we had a slight weapons malfunction, 
    but uh... everything's perfectly all right now. 
    We're fine. We're all fine here now, thank you. 
    Uh, how are you?"`,
    author: 'Han Solo'},
    {quote: '"I find your lack of faith disturbing."',
    author: 'Darth Vader'},
    {quote: '"Search your feelings. You know it to be true."',
    author: 'Darth Vader'},
    {quote: '"Do. Or do not. There is no try."',
    author: 'Yoda'},
    {quote: '"It\'s a trap!"', author: 'Admiral Ackbar'},
    {quote: '"That\'s no moon..."', author: 'Obi-Wan Kenobi'},
    {quote: '"Great, kid. Don’t get cocky!"', author: 'Han Solo'},
    {quote: `"Hokey religions and ancient weapons are no 
    match for a good blaster at your side, kid."`,
    author: 'Han Solo'},
    {quote: `"This is the weapon of a Jedi Knight. Not as 
    clumsy or random as a blaster. An elegant weapon... 
    for a more civilized age."`,
    author: 'Obi-Wan Kenobi'},
    {quote: '"Aren\'t you a little short for a stormtrooper?"',
    author: 'Princess Leia Organa'},
    {quote: '"I am altering the deal, pray I don\'t alter it any further."',
    author: 'Darth Vader'},
    {quote: '"WWWWWWWGGGGHHHRRRRW."', author: 'Chewie'},
    {quote: '"This deal is getting worse all the time."', author: 'Lando Calrissian'},
    {quote: '"HRONNK HRONNK ARK HRONNKK"', author: 'Sand Person'},
    {quote: '"Nooooooooooooooooo!"', author: 'Darth Vader'},
    {quote: '"I\'m Luke Skywalker. I\'m here to rescue you!"', author: 'Luke Skywalker'}
  ]
  const defaultQuote = {quote: 'A long time ago, in a galaxy far, far away...'}
  const [quote, setQuote] = useState(defaultQuote)

  useEffect(() => {
    const quoteMachine = setInterval(() => {
      setQuote(q => randomQuote(quotes))
    }, 5000)
    return () => clearInterval(quoteMachine)
  },[quotes])

  return (
    <blockquote class="quote">
      <div>
        <p>{quote.quote}</p>
        {quote.author ? <cite>- {quote.author}</cite> : null}
      </div>
    </blockquote>
  )
}

export default Quote