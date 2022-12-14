import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Form } from './components/Form/Form'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart'element={<Cart/>}/>
              <Route path='/Form' element={<Form/>}/>

            </Routes>
              
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;


