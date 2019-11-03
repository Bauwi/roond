import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: 2px solid ${p => (p.isCurrent ? '#09d3ac' : 'transparent')};
  transition: border 0.5s ease-in-out;
  cursor: pointer;
`

const Occurence = styled.div`
  border: 2px solid ${p => (p.isCurrent ? '#09d3ac' : 'white')};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  transition: border 0.5s ease-in-out;
`

const ParamsOccurencesButton = ({ occurences, handleClick, isCurrent }) => {
  const renderCircles = () =>
    new Array(occurences).fill().map(() => <Occurence isCurrent={isCurrent} />)
  return (
    <Button onClick={handleClick} isCurrent={isCurrent}>
      {renderCircles()}
    </Button>
  )
}

export default ParamsOccurencesButton
