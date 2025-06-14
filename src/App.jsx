import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import EpisodeDetail from './pages/EpisodeDetail'
import CharacterDetail from './pages/CharacterDetail'
import Header from './components/Header'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/episode/:id" element={<EpisodeDetail />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  </Router>
)

export default App
