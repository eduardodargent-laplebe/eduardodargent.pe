import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import iso from '../images/iso.svg'
import '../css/Brand.css'

export default ({ type, isLink }) => {
  const brand = {
    logo: logo,
    iso: iso,
  }[type]
  const img = <img className={type} src={brand} alt="" />

  return isLink ? <Link to="/">{img}</Link> : img
}
