import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import LizardApp from './components/LizardApp'

function App() {

  return (
    <Monetization>
      <LizardApp />
    </Monetization>
  )
}

export default App