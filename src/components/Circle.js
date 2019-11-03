import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

export const Circle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  width: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  min-height: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  min-width: ${p => 100 / Math.pow(2, p.circle.id.length - 1)}vh;
  background-color: #282c34;
  border: 2px solid #09d3ac;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #49515f;
  }
  p {
    color: #09d3ac;
    font-size: 3rem;
    font-family: 'Architects Daughter', cursive;
  }
`

const CircleComp = ({ circle, handleClick }) => {
  const { transform, transformOrigin } = useSpring({
    transform: `scale(1)`,
    transformOrigin: '50% 50%',
    from: { transform: 'scale(0)', transformOrigin: '50% 50%' },

    config: { mass: 2, tension: 500, friction: 200 }
  })
  return (
    <animated.div
      id="animated"
      style={{
        transform,
        transformOrigin
      }}
    >
      <Circle circle={circle} onClick={() => handleClick(circle.id)}>
        {circle.id === '1' && <p>Click me to start !</p>}
      </Circle>
    </animated.div>
  )
}

export default CircleComp
