//import { useState } from 'react'
import {BrowserRouter, Router,Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 

  return (
 <BrowserRouter future={{ v7_startTransition: true }}>
<NavBar/>
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
  <Route path='/product/:productId' element={ <ItemDetailContainer/> }/>
  <Route path='*' element={<h1>404 error </h1>}/>
</Routes>
 </BrowserRouter>  
  )
}

export default App
