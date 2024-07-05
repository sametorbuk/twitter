import { useState } from 'react'
import axios from "axios"
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, far, fab } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far, fab);
import PleasedOrNotButton from './components/unpleased-button'



function App() {
 

  return (
    <>
      <PleasedOrNotButton></PleasedOrNotButton>
    </>
  )
}

export default App
