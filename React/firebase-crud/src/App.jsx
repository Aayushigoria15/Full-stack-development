import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import MyState from './context/data/MyState'
import Adduser from './Pages/adduser/Adduser'
import Updateuser from './Pages/updateuser/Updateuser'

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/updateuser' element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App