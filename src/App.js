import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Los Productos Mas Buscados"/>} />
            <Route path='/categoria/:id' element={<ItemListContainer greeting="Los Productos Mas Buscados"/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart'element={<Cart/>}/>

          </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

{/* <ItemListContainer greeting="Los Productos Mas Buscados"/>
        <ItemDetailContainer/> */}
