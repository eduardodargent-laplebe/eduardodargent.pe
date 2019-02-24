import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import Iso from '../images/iso.svg'
import './Brand.css'

export default ({ type, isLink }) => {
  const svg = {
    logo: <Logo className={type} />,
    iso: <Iso className={type} />,
  }[type]
  return isLink ? <Link to="/">{svg}</Link> : svg
}
