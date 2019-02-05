import React from 'react'
import Brand from './Brand'
import '../css/TopBar.css'

export default () => (
  <div className="top-bar">
    <Brand type="iso" />
    <div className="material-menu">
      <i className="material-icons material-menu--open">menu</i>
      <i className="material-icons material-menu--close">close</i>
    </div>
  </div>
)
