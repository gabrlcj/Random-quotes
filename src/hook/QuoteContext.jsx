import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const QuoteContext = createContext([])

export function QuoteProvider({ children }) {
  const randomQuoteURL = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
  const [randomquote, setRandomQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 900)
  }, [])

  useEffect(() => {
    axios.get(randomQuoteURL).then((response) => {
      setRandomQuotes(response.data.data)
    })
  }, [])

  const handleRandomQuote = async () => {
    setLoading(true)
    if (loading === false) {
      const quote = await axios.get(randomQuoteURL).then((response) => response.data.data)
      setRandomQuotes(quote)
    }
    setLoading(false)
  }

  return <QuoteContext.Provider value={{ randomquote, loading, handleRandomQuote }}>{children}</QuoteContext.Provider>
}
