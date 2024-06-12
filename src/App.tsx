import React from 'react'

// import Navbar from './component/Navbar'
import Home from './component/Home'
import SelfCard from './component/SelfCard'

const App : React.FC = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Home/>
        <SelfCard/>
    </div>
  )
}

export default App