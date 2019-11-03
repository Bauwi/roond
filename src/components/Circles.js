import React, { useState } from 'react'
import styled from 'styled-components'

import Circle from './Circle'
import { splitCircle } from '../utils/splitCircle'

const containersColors = [
  { level: 1, color: '#bf00ff' },
  { level: 2, color: '#ffd21f' },
  { level: 3, color: '#e60000' },
  { level: 4, color: 'pink' },
  { level: 5, color: 'pink' },
  { level: 6, color: 'pink' },
  { level: 7, color: 'pink' }
]

const Circles = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: ${p => (p.circle.id.length % 2 !== 0 ? 'row' : 'column')};
  border: 2px solid
    ${p =>
      p.withHelper
        ? containersColors.find(col => col.level === p.circle.id.length).color
        : 'transparent'};
  border-radius: 50%;
`

const CirclesComp = ({ occurences, withHelper }) => {
  const [circles, updateCircles] = useState([{ id: '1', children: [] }])

  const handleClick = id => {
    const result = splitCircle(circles, id, occurences)
    updateCircles(result)
  }

  const renderCircles = circles => {
    return circles.map(circle => {
      if (!circle.children.length) {
        return (
          <Circle key={circle.id} circle={circle} handleClick={handleClick} />
        )
      }
      return (
        <Container key={circle.id} circle={circle} withHelper={withHelper}>
          {renderCircles(circle.children)}
        </Container>
      )
    })
  }

  return <Circles>{renderCircles(circles)}</Circles>
}

export default CirclesComp
