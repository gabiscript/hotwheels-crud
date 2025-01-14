import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
          <div className='logo'></div>
            <ul>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/about'><li>SOBRE</li></Link>
                <Link to='/carlist'><li>CARROS</li></Link>
                <Link to='/carform'><li>ADICIONAR CARRO</li></Link>
                
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
