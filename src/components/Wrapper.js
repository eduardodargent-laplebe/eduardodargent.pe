import React from 'react'
import Header from './Header'
import '../css/Wrapper.css'

export default ({ children }) => (
  <div className="wrapper">
    <Header />
    {children}
  </div>
)
