import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const QuoteContext = createContext([])

export function QuoteProvider({ children }) {
  const randomQuoteURL = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
  const [randomquote, setRandomQuotes] = useState([])

  useEffect(() => {
    axios.get(randomQuoteURL).then((response) => {
      setRandomQuotes(response.data.data)
    })
  }, [])

  const handleRandomQuote = async () => {
    const quote = await axios.get(randomQuoteURL).then((response) => response.data.data)
    setRandomQuotes(quote)
  }

  return <QuoteContext.Provider value={{ randomquote, handleRandomQuote }}>{children}</QuoteContext.Provider>
}
