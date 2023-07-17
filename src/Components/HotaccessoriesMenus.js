import React from 'react'
import {Link} from 'react-router-dom'
import '../Stylesheet/Hotaccessoriesmenus.css'

const HotaccessoriesMenus = () => {
  return (
    <div className="HotaccessoriesMenus">
        <Link className="Hotaccessorieslink" to="/music">Music Store</Link>
        <Link className="Hotaccessorieslink" to="/smartDevices">Smart Devices</Link>
        <Link className="Hotaccessorieslink" to="/home">Home</Link>
        <Link className="Hotaccessorieslink" to="/lifestyle">LifeStyle</Link>
        <Link className="Hotaccessorieslink" to="/mobileAccessories">Mobile Accessories</Link>
        </div>
  )
}

export default HotaccessoriesMenus