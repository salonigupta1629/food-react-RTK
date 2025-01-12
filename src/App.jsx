import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './pages/Error'
import Success from './pages/Success'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/success" element={<Success/>}/>
<Route path="/*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App