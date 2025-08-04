import Header from './components/Header'
import Matches from './components/Matches'
import Standings from './components/Standings'
import Teams from './components/Teams'
import TeamDetail from './components/TeamDetail'
import AdminTeams from './components/admin/AdminTeams'
import AdminTeamsPlayer from './components/admin/AdminTeamPlayer'
import AdminHeader from './components/admin/AdminHeader'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import AddTeams from './components/admin/AddTeams'

function Layout() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
        {isAdminRoute? <AdminHeader />: <Header />}
        <Routes>
          <Route path='/' element={<Matches />} />
          <Route path='/standings' element={<Standings />} />
          <Route path='/teams' element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/admin" element={<AdminTeams />} />
          <Route path="/admin/:id" element={<AdminTeamsPlayer />} />
          <Route path="/admin/addTeam" element={<AddTeams />} />
        </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
