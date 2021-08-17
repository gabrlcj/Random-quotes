import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsArrowRight } from 'react-icons/bs'

import RandomButton from './components/RandomButton'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

import { createGlobalStyle } from 'styled-components'
import { InitialQuote } from './styles/InitialQuote'
import { DivAuthor } from './styles/InitialAuthorQuote'

const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    margin: 0 auto;
    background: whitesmoke;
  }
`

// 'https://quote-garden.herokuapp.com/api/v3/quotes'

export default function App() {
  const randomQuoteURL = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 650)
  }, [])

  useEffect(() => {
    axios.get(randomQuoteURL).then((response) => {
      setQuotes(response.data.data)
    })
  }, [])

  const quoteOnScreen = quotes.map((quote) => (
    <li key={quote._id}>
      <p>"{quote.quoteText}"</p>
    </li>
  ))

  const AuthorOnScreen = quotes.map((quote) => (
    <section key={quote._id}>
      <h4>
        {quote.quoteAuthor}
        <BsArrowRight style={{ fontSize: 52, paddingRight: 22 }} />
      </h4>
      <p>{quote.quoteGenre}</p>
    </section>
  ))

  const handleRandomQuote = async () => {
    setLoading(true)
    if (loading === false) {
      const quote = await axios.get(randomQuoteURL).then((response) => response.data.data)
      setQuotes(quote)
    }
    setLoading(false)
  }

  return (
    <>
      <GlobalStyle />
      <RandomButton action={handleRandomQuote} />
      {loading === false ? (
        <>
          <InitialQuote>{quoteOnScreen}</InitialQuote>
          <DivAuthor>{AuthorOnScreen}</DivAuthor>
        </>
      ) : (
        <InitialQuote>
          <LoadingScreen />
        </InitialQuote>
      )}
      <Footer />
    </>
  )
}
