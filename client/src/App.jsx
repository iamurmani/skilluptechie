import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import AdminSideBar from './feature/AdminSideBar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<AdminSideBar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
