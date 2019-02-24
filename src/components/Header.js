import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
import './Header.css'

export default () => (
  <header className="header">
    <div className="fancy-bar" />
    <TopBar />
    <NavBar />
  </header>
)
