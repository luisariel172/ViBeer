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
import {
	ListaProductos, CargaProductos,
	ListaCategorias, CargaCategorias,
	ListaUsuarios, CargaUsuarios
} from '../src/admin';

//	Función principal
function App() {
	return (
		<div className='App'>
			<ContextCarrito>
				<Navbar />
				<Routes>

					<Route path='/' element = {<Home />} />
					<Route path='/todas' element = {<Categoria />} />
					<Route path='/categoria/:categoria' element = {<Categoria />} />
					<Route path='/item_detalle/:itemId' element = {<Detalle />} />
					<Route path='/carrito' element = {<Carrito />} />

					<Route path='/admin_lista_productos' element = {<ListaProductos />} />
					<Route path='/admin_carga_productos' element = {<CargaProductos />} />

					<Route path='/admin_lista_categorias' element = {<ListaCategorias />} />
					<Route path='/admin_carga_categorias' element = {<CargaCategorias />} />

					<Route path='/admin_lista_usuarios' element = {<ListaUsuarios />} />
					<Route path='/admin_carga_usuarios' element = {<CargaUsuarios />} />

				</Routes>
			</ContextCarrito>
			<Footer />
		</div>
	);
}

export default App;
