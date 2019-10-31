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
  /* border: 2px solid
    ${p =>
      containersColors.find(col => col.level === p.circle.id.length).color}; */
  border-radius: 50%;
  /* height: 100%; */
`

const initial = [
  {
    id: '1',
    children: [
      {
        id: '11',
        children: [{ id: '111', children: [] }, { id: '112', children: [] }]
      },
      { id: '12', children: [] }
    ]
  },
  {
    id: '2',
    children: [
      {
        id: '21',
        children: [{ id: '211', children: [] }, { id: '212', children: [] }]
      },
      {
        id: '22',
        children: [{ id: '221', children: [] }, { id: '222', children: [] }]
      }
    ]
  }
]
const CirclesComp = () => {
  const [circles, updateCircles] = useState([{ id: '1', children: [] }])

  const handleClick = id => {
    const result = splitCircle(circles, id)
    console.log(result)
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
        <Container key={circle.id} circle={circle}>
          {renderCircles(circle.children)}
        </Container>
      )
    })
  }

  return <Circles>{renderCircles(circles)}</Circles>
}

export default CirclesComp
