import { useState } from 'react'
import 'flowbite';
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import LandingPage from './pages/LandingPage'
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import Signin from './pages/Signin';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/getstarted' element={<GetStarted/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Route>
      </Routes>
  )
}

export default App
