import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import ParamsOccurencesButton from './ParamsOccurencesButton'
import ParamsWithHelp from './ParamsWithHelper'
import ToolIcon from '../Icons/Tool'

const TogglerWrapper = styled.div`
  margin-bottom: 1rem;
`

const Wrapper = styled.aside`
  align-items: flex-end;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 10px;
  right: 10px;
`
const Toggler = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
    fill: none;
    stroke: ${p => (!p.toggled ? '#09d3ac' : 'white')};
  }
`

const Params = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`

const ParamsComp = ({
  setOccurences,
  occurences,
  withHelper,
  setWithHelper
}) => {
  const perspective = '800px'
  const [toggle, setToggle] = useState(false)
  const { xyz } = useSpring({
    from: { xyz: [0, 0, 0] },
    xyz: [toggle ? 310 : 0, 0, 0]
  })

  const { transform, transformOrigin } = useSpring({
    transform: `perspective(${perspective}) scale(${toggle ? 1.3 : 1})`,
    transformOrigin: '100% 0%',
    // config: { mass: 10, tension: 200, friction: 80 }
    config: { mass: 3, tension: 200, friction: 20 }
  })
  return (
    <Wrapper>
      <TogglerWrapper>
        <animated.div
          id="animated"
          style={{
            transform,
            transformOrigin
          }}
        >
          <Toggler
            toggled={toggle}
            onClick={() => (toggle ? setToggle(false) : setToggle(true))}
          >
            <ToolIcon />
          </Toggler>
        </animated.div>
      </TogglerWrapper>

      <animated.div
        style={{
          transform: xyz.interpolate(
            (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
          )
        }}
      >
        <Params>
          <ParamsWithHelp
            withHelper={withHelper}
            setWithHelper={setWithHelper}
          />
          <ParamsOccurencesButton
            occurences={2}
            isCurrent={occurences === 2}
            handleClick={() => setOccurences(2)}
          />
          <ParamsOccurencesButton
            occurences={3}
            isCurrent={occurences === 3}
            handleClick={() => setOccurences(3)}
          />
          <ParamsOccurencesButton
            occurences={4}
            isCurrent={occurences === 4}
            handleClick={() => setOccurences(4)}
          />
          <ParamsOccurencesButton
            occurences={5}
            isCurrent={occurences === 5}
            handleClick={() => setOccurences(5)}
          />
        </Params>
      </animated.div>
    </Wrapper>
  )
}

export default ParamsComp
