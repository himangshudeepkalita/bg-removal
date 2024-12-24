import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <p>Copyright @Himangshu | All right reserved.</p>
      <div>
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
