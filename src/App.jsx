import Header from './components/Header'
import Matches from './components/Matches'
import Standings from './components/Standings'
import Teams from './components/Teams'
import TeamDetail from './components/TeamDetail'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Matches />} />
          <Route path='/standings' element={<Standings />} />
          <Route path='/teams' element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
