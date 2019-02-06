import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import '../css/Menu.css'
import Brand from './Brand'

export default () => (
  <div className="menu">
    <div className="fancy-bar" />
    <Brand type="logo" isLink />

    <nav className="nav">
      <Link to="/cv/">CV</Link>
      <Link to="/ideas/">IDEAS</Link>
      <Link to="/opiniones/">OPINIONES</Link>
      <Link to="/publicaciones/">PUBLICACIONES</Link>
      <Link to="/ensenanza/">ENSEÑANZA</Link>
    </nav>

    <Footer />
  </div>
)
