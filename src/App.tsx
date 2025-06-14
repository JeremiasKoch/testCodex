import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router'
import Dashboard from './pages/Dashboard'
import EpisodeDetail from './pages/EpisodeDetail'
import CharacterDetail from './pages/CharacterDetail'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="episode/:id" element={<EpisodeDetail />} />
      <Route path="character/:id" element={<CharacterDetail />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App
