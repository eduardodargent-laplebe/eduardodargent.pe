import React from 'react'
import Header from './header'
import '../css/Wrapper.css'

export default ({ children }) => (
  <div className="wrapper">
    <Header />
    {children}
  </div>
)
