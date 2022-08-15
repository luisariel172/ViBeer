//
//  Lanza la aplicación !!!
//

//	React y App
import React, { useEffect } from 'react';
import './App.css';

//	Básicos
import { Home, Navbar, Footer } from './components';

//	Router
import { Routes, Route } from 'react-router-dom';

//	Carrito de compra
import { ContextCarrito, Carrito } from './components';

//	Galería de productos
import { ItemListContainer as Categoria, ItemDetailContainer as Detalle}
	from './components';

function App() {
	return (
		<div className='App'>
			<ContextCarrito>
				<Navbar />
				<Routes>
					<Route path='/' element = {<Home />} />
					<Route path='/todas' element = {<Categoria />} />
					<Route path='/categoria/:categoriaId' element = {<Categoria />} />
					<Route path='/item/:itemId' element = {<Detalle />} />
					<Route path='/carrito' element = {<Carrito />} />
				</Routes>
			</ContextCarrito>
			<Footer />
		</div>
	);
}

export default App;
