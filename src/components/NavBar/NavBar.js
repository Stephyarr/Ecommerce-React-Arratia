import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from './NavBar.style'

const NavBar = () => {
  return (
    <header style={style.container}>
      <h1 style={style.title}>Lions</h1>
      <nav>
        <a style={style.navbar} href="/shop">Productos</a>
        <a style={style.navbar} href="/Nosotros">Nosotros</a>
      </nav>
      <div>
        <ShoppingCartIcon style={style.icons}/>
      </div>
    </header>
  )
}

export default NavBar



