import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/global.css'
import {Login} from './pages/Login/login';
import {Home} from './pages/Home/Home'
import {Register} from './pages/Register/Register'

export function App() {
  

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />}/>
    </Routes>
  </Router>
  )
}

