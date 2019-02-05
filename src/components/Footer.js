import React from 'react'
import '../css/Footer.css'
import SocialIcon from './SocialIcon'

export default () => (
  <footer className="footer">
    <div className="social-list">
      <SocialIcon name="facebook" isLink={true} url="http://www.google.com" />
      <SocialIcon name="twitter" isLink={true} url="http://www.google.com" />
    </div>

    <div className="email">
      <a href="mailto:hola@eduardodargent.pe">hola@eduardodargent.pe</a>
    </div>
  </footer>
)
