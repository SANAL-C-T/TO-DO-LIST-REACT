import { useState } from 'react'

import './App.css'
import Head from './Components/Header';
import Addform from './Components/Input';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Head/>
     <Addform/>
    </div>
  )
}

export default App
