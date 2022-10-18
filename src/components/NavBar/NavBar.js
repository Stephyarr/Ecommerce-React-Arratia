import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { style } from './NavBar.style'
// import { Link, NavLink } from 'react-router-dom'
// import { ProductData } from '../../data/ProductData'


const NavBar = () => {
  return (
    <header style={style.container}>
      <h1 style={style.title}>Lions</h1>
      <nav>
        {/* {
          ProductData.map((categoria, i)=>{ 
            
              <a href={categoria.ruta}>Accesorio</a>

           
          })
        } */}
        <a style={style.navbar} href="/categoria">Accesorio</a>
        <a style={style.navbar} href="/categoria">Buzo Conjunto</a>
        <a style={style.navbar} href="/categoria">Buzo Mascota</a>
      </nav>
      <div style={style.icon}>
       <CartWidget/>
      </div>
      
      
    </header>
  )
}

export default NavBar



