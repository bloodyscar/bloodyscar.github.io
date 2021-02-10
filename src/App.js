import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage'

import './App.css'
import { Route, Switch } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Recommend from './components/Recommend/Recommend'
import SectionFooter from './components/Footer/SectionFooter'
import Foods from './pages/Foods'
import Chef from './pages/Chef'


function App() {
  return (
    <>
      <Switch>

        <Route exact path="/">
          <Navbar />
          <Homepage />
        </Route>

        <Route path="/recipes">
          <Navbar />
          <Recipes />
        </Route>

        <Route path="/foods">
          <Navbar />
          <Foods />
          <SectionFooter />
        </Route>

        <Route path="/chef">
          <Navbar />
          <Chef />
          <SectionFooter />
        </Route>
      
      
        
      </Switch>


    </>
  )
}

export default App;