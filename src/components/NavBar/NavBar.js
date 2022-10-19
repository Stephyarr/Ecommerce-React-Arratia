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
        {/* {
          ProductData.map((categoria, i)=>{ 
            
              <a href={categoria.ruta}>Accesorio</a>

           
          })
        } */}
        <NavLink style={style.navbar} to="/categoria/accesorio">Accesorio</NavLink>
        <NavLink style={style.navbar} to="/categoria/Buzo Conjunto">Buzo Conjunto</NavLink>
        <NavLink style={style.navbar} to="/categoria/Buzo Mascota">Buzo Mascota</NavLink>
      </nav>
      <Link to="/cart" style={style.icon}>
       <CartWidget/>
      </Link>
      
      
    </header>
  )
}

export default NavBar



