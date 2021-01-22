import React from 'react'
import './Navbar.css'
import carlogo from '../../pictures/car.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navWrapper">
      <div className="navlogo">

        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={carlogo} alt=""></img>
        </Link>

      </div>
      <div className="menuWrapper">

        <Link to='/vehicles' className="menuLink" style={{ textDecoration: 'none' }}>
          Vehicles
        </Link>

        <Link to='/customers' className="menuLink" style={{ textDecoration: 'none' }}>
          Customers
        </Link>

        <Link to='/available' className="menuLink" style={{ textDecoration: 'none' }}>
          Available
        </Link>

      </div>

    </div>
  )

}

export default Navbar