import React from 'react'
import styled from 'styled-components'

import HelpIcon from '../Icons/Help'

const ParamsWithHelper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  cursor: pointer;
  svg {
    stroke: ${p => (p.withHelper ? '#09d3ac' : 'white')};
    transition: stroke 0.225s ease-in;
  }
`

const ParamsWithHelperComp = ({ withHelper, setWithHelper }) => {
  console.log(withHelper)
  return (
    <ParamsWithHelper
      onClick={() => setWithHelper(!withHelper)}
      withHelper={withHelper}
    >
      <HelpIcon />
    </ParamsWithHelper>
  )
}

export default ParamsWithHelperComp
