//
//  Lanza la aplicación !!!
//

import React from 'react';

//	App !!!
import './App.css';

//	Compartidos
import { Navbar, Footer } from './shared';

//	Router
import { Routes, Route } from 'react-router-dom';

//	Context de carrito de compra
import { Home, ContextCarrito, Carrito } from './commerce';

//	Galería de productos
import { ItemListContainer as Categoria, ItemDetailContainer as Detalle }
	from './commerce';

//	Administración
import { ListaProductos, CargaProductos }
	from '../src/admin';

//	Función principal
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

					<Route path='/admin/lista_productos' element = {<ListaProductos />} />
					<Route path='/admin/carga_productos' element = {<CargaProductos />} />

				</Routes>
			</ContextCarrito>
			<Footer />
		</div>
	);
}

export default App;
