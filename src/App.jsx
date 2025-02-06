import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Career from './pages/Career'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Leadership from './pages/Leadership'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="career" element={<Career />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Projects />} />
        <Route path="leadership" element={<Leadership />} />
      </Route>
    </Routes>
  )
}

export default App
