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
      <Link to="/ideas/">Ideas</Link>
      <Link to="/opiniones/">Opiniones</Link>
      <Link to="/publicaciones/">Publicaciones</Link>
      <Link to="/ensenanza/">Enseñanza</Link>
    </nav>

    <Footer />
  </div>
)
