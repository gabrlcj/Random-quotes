import { QuoteProvider } from './hook/QuoteContext'

import RandomButton from './components/RandomButton'
import Footer from './components/Footer'
import InitialQuote from './components/InitialQuote'

import { GlobalStyle } from './styles/global'

// 'https://quote-garden.herokuapp.com/api/v3/quotes'

export default function App() {
  return (
    <QuoteProvider>
      <GlobalStyle />
      <RandomButton />
      <InitialQuote />
      <Footer />
    </QuoteProvider>
  )
}
