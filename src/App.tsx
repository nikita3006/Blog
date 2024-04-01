import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'

const App : React.FC = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default App