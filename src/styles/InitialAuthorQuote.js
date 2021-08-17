import styled from 'styled-components'

export const DivAuthor = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  width: min(60%, 1200px);
  margin: 0 auto;

  section {
    border-radius: 1px;
    transition: all ease-out 0.2s;
    &:hover {
      background: #333333;
      color: #fff;
      cursor: pointer;
      transition: all ease-in 0.2s;
    }
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: 700 24px 'Raleway', sans-serif;
    line-height: 28px;
    list-style: none;
    padding-left: 60px;
    margin: 16px 0;
  }

  p {
    font: 500 14px 'Raleway', sans-serif;
    line-height: 16px;
    padding-left: 60px;
    margin: 16px 0;
  }
`
