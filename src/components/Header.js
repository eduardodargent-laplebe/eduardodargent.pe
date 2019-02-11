import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
import '../css/Header.css'

export default () => (
  <header className="header">
    <div className="fancy-bar" />
    <TopBar />
    <NavBar />
  </header>
)
