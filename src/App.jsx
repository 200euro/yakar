import React from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
  <>

  <Header/>
  <Hero num='1' text= 'HELLO WORLD'/>
  <Hero num='2'/>
  <Hero num='3'/>
  <Hero num='4'/>
  <Hero num='5'/>

  </>
  )
}

export default App