import React from 'react'
import { Link } from 'gatsby'
import Brand from './Brand'
import SocialIcon from './SocialIcon'
// import * as DATA from '../utils/Data'
import { $ } from '../utils/Utils'
import '../css/NavBar.css'

export default class NavBar extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (window) {
      window.matchMedia('(max-width: 900px)').addListener(this.resetMenu)
    }
  }

  resetMenu(bp) {
    if (bp.matches) {
      $('.nav-bar').style.display = 'none'
      $('.top-open').style.display = 'inline-block'
      $('.top-close').style.display = 'none'
    } else {
      $('.nav-bar').style.display = 'flex'
      $('.top-open').style.display = 'none'
      $('.top-close').style.display = 'none'
    }
  }

  closeMenu() {
    if (window) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        $('.nav-bar').style.display = 'none'
        $('.top-open').style.display = 'inline-block'
        $('.top-close').style.display = 'none'
      }
    }
  }
  render() {
    return (
      <div className="nav-bar">
        <Brand type="logo" isLink />
        <nav className="nav">
          <Link onClick={this.closeMenu} to="/cv/" activeClassName="active">
            CV
          </Link>
          <Link onClick={this.closeMenu} to="/ideas/" activeClassName="active">
            IDEAS
          </Link>
          <Link
            onClick={this.closeMenu}
            to="/opiniones/"
            activeClassName="active"
          >
            OPINIONES
          </Link>
          <Link
            onClick={this.closeMenu}
            to="/publicaciones/"
            activeClassName="active"
          >
            PUBLICACIONES
          </Link>
          <Link
            onClick={this.closeMenu}
            to="/ensenanza/"
            activeClassName="active"
          >
            ENSEÑANZA
          </Link>
        </nav>
        <div className="social-list">
          <SocialIcon name="facebook" isLink url="http://www.google.com" />
          <SocialIcon name="twitter" isLink url="http://www.google.com" />
        </div>
        <div className="email">
          <a href="mailto:hola@eduardodargent.pe">hola@eduardodargent.pe</a>
        </div>
      </div>
    )
  }
}
