import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/signin'
import Signout from './pages/signout'
import About from './pages/about'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signout' element={<Signout />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App