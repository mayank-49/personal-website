import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Timeline from './components/Experience'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
