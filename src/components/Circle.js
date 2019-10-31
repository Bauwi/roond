import React from 'react'
import styled from 'styled-components'

export const Circle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  /* height: ${p => (p.circle.id.length % 2 === 0 ? 50 : 100)}%;
  width: ${p => (p.circle.id.length % 2 === 0 ? 100 : 50)}%; */
  height: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  width: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  min-height: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  min-width: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  border: 2px solid #09d3ac;
  border-radius: 50%;
  cursor:pointer;

  &:hover {
    background: #49515f
  }
  p {
    color: #09d3ac;
    font-size: 1rem;
  }
`

const CircleComp = ({ circle, handleClick }) => {
  return (
    <Circle circle={circle} onClick={() => handleClick(circle.id)}>
      <p>o</p>
    </Circle>
  )
}

export default CircleComp
