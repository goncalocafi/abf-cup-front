import Header from './components/Header'
import Matches from './components/Matches'
import Standings from './components/Standings'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Matches />} />
          <Route path='/standings' element={<Standings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
