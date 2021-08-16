import React from 'react'
import styled from 'styled-components'
import { FiRotateCw } from 'react-icons/fi'

const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 200px;
`

const RandomButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  padding: 16px;
  margin: 16px;
  border: none;
  font-size: 18px;
  background: whitesmoke;
  cursor: pointer;
  border-radius: 22px;
  transition: background ease-out 0.2s;
  &:hover {
    box-shadow: -2px 2px 3px 0 #333333;
    background: #f7df94;
    transition: background ease-in 0.2s;
  }
`

export default function RandomButton({ action }) {
  return (
    <DivButton>
      <RandomButtonStyled onClick={action}>
        random <FiRotateCw />
      </RandomButtonStyled>
    </DivButton>
  )
}
