import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import Cazari from './pages/Cazari'
import Masini from './pages/Masini'
import Explore from './pages/Explore'
import Trips from './pages/Trips'
import NoPage from './pages/NoPage'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cazari" element={<Cazari />} />
        <Route path="/masini" element={<Masini />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
)
