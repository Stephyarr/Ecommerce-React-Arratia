import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <header style={style.container}>
      <h1>Lions</h1>
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

const style = {
  container:{
    display: 'flex',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  },
  navbar:{
    margin: 10,
    fontSize: 18,
    textDecoration: 'none',
    color: 'black'
  },
  icons:{
    fontSize: 25,
    margin: 10
  }
}

