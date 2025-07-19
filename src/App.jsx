import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<LandingPage/>}/>
        </Route>
      </Routes>
  )
}

export default App
