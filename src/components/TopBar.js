import React from 'react'
import Brand from './Brand'
// import * as DATA from '../utils/Data'
import { $ } from '../utils/Utils'
import './TopBar.css'

export default class TopBar extends React.Component {
  openMenu() {
    if (window) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        $('.nav-bar').style.display = 'flex'
        $('.top-open').style.display = 'none'
        $('.top-close').style.display = 'inline-block'
      }
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
      <div className="top-bar">
        <Brand type="iso" isLink />
        <div>
          <i onClick={this.openMenu} className="material-icons top-open">
            menu
          </i>
          <i onClick={this.closeMenu} className="material-icons top-close">
            close
          </i>
        </div>
      </div>
    )
  }
}
