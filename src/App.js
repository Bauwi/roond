import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Circles from './components/Circles'
import Params from './components/Params/Params'

function App() {
  const [occurences, setOccurences] = useState(2)
  const [withHelper, setWithHelper] = useState(false)
  return (
    <div className="App">
      <Circles occurences={occurences} withHelper={withHelper} />
      <Params
        setOccurences={setOccurences}
        occurences={occurences}
        withHelper={withHelper}
        setWithHelper={setWithHelper}
      />
    </div>
  )
}

export default App
