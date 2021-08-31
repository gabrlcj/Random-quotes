import { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { QuoteContext } from '../../hook/QuoteContext'
import { DivAuthor, InitialQuoteStyle } from './styles'

export default function InitialQuote() {
  const { randomquote } = useContext(QuoteContext)

  return (
    <>
      {randomquote.map((quote) => (
        <div key={quote._id}>
          <InitialQuoteStyle>
            <li>
              <p>"{quote.quoteText}"</p>
            </li>
          </InitialQuoteStyle>
          <DivAuthor>
            <section>
              <h4>
                {quote.quoteAuthor}
                <BsArrowRight style={{ fontSize: 52, paddingRight: 22 }} />
              </h4>
              <p>{quote.quoteGenre}</p>
            </section>
          </DivAuthor>
        </div>
      ))}
    </>
  )
}
