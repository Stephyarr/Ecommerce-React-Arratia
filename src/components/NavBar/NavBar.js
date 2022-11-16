import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { style } from './NavBar.style'
import { Link, NavLink } from 'react-router-dom'
// import { ProductData } from '../../data/ProductData'

const NavBar = () => {
  return (
    <header style={style.container}>
      <Link to="/">
        <h1 style={style.title}>Lions</h1>
      </Link>
      
      <nav>
        <NavLink style={style.navbar} to="/categoria/accesorios">Accesorio</NavLink>
        <NavLink style={style.navbar} to="/categoria/buzo humano">Buzo Conjunto</NavLink>
        <NavLink style={style.navbar} to="/categoria/buzo perro">Buzo Mascota</NavLink>
      </nav>
      <Link to="/Cart" style={style.icon}>
       <CartWidget/>
      </Link>
    
    
    </header>
  )
}

export default NavBar



