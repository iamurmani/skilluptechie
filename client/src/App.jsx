import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/LoginPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App