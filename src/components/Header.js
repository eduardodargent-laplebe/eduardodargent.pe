import React from 'react'
import Menu from './Menu'
import TopBar from './TopBar'
import '../css/Header.css'

export default () => (
  <header className="header">
    <TopBar />
    <Menu />
  </header>
)
