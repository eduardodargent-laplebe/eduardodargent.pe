import React from 'react'
import Header from './Header'
import './Page.css'

export default props => (
  <div className={`page ${props.class}`}>
    <Header />
    <main className="main">{props.children}</main>
  </div>
)
