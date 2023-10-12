// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={SignUp}/>
      </Routes>
    </Router>
  )
}

export default App
