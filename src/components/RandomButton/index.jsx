import React, { useContext } from 'react'
import { FiRotateCw } from 'react-icons/fi'
import { QuoteContext } from '../../hook/QuoteContext'
import { DivButton, RandomButtonStyled } from './styles'

export default function RandomButton() {
  const { handleRandomQuote } = useContext(QuoteContext)

  return (
    <DivButton>
      <RandomButtonStyled onClick={handleRandomQuote}>
        random <FiRotateCw />
      </RandomButtonStyled>
    </DivButton>
  )
}
