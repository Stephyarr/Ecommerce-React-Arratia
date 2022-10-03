import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { style } from './NavBar.style'

const NavBar = () => {
  return (
    <header style={style.container}>
      <h1 style={style.title}>Lions</h1>
      <nav>
        <a style={style.navbar} href="/shop">Productos</a>
        <a style={style.navbar} href="/categorias">Categorias</a>
        <a style={style.navbar} href="/nosotros">Nosotros</a>
      </nav>
      <div style={style.icon}>
       <CartWidget/>
      </div>
      
      
    </header>
  )
}

export default NavBar



