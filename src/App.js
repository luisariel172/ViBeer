//
//  Lanza la aplicación !!!
//

//	Framework !!!
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//	Comercio !!!
import { Navbar, Footer } from './shared';
import { Home, SesionContext, ContextCarrito, Carrito } from './commerce';
import {
		ItemListContainer as Categoria,
		ItemDetailContainer as Detalle,
		Login, Registrarse, SesionConUsuario
	}
from './commerce';

//	Administración !!!
import {
	ListaProductos, AgregarProducto, CargaProductos, ConsultaProducto,
		EdicionProducto,
	ListaCategorias, AgregarCategoria, CargaCategorias, ConsultaCategoria,
		EdicionCategoria,
	ListaOrdenes, CargaOrdenes, ConsultaOrden,
	ListaUsuarios, AgregarUsuario, CargaUsuarios, ConsultaUsuario,
		EdicionUsuario,
} from '../src/admin';

//	CSS !!!
import './App.css';

//	Default !!!
export default function App() {

	//	Render !!!
	return (
		<div className='App'>
			<SesionContext>
			<ContextCarrito>
				<Navbar />
				<Routes>

					<Route path='/' element = {<Home />} />
					<Route path='/todas' element = {<Categoria />} />
					<Route path='/todas/:buscar' element = {<Categoria />} />
					<Route path='/categoria/:id_categoria' element = {<Categoria />} />
					<Route path='/item_detalle/:itemId' element = {<Detalle />} />

					<Route path='/login' element = {<Login />} />
					<Route path='/registrarse' element = {<Registrarse />} />
					<Route path='/sesion_con_usuario/:id' element = {<SesionConUsuario />} />

					<Route path='/admin_lista_productos' element = {<ListaProductos />} />
					<Route path='/admin_agregar_producto' element = {<AgregarProducto />} />
					<Route path='/admin_carga_productos' element = {<CargaProductos />} />
					<Route path='/admin_consulta_producto/:id' element = {<ConsultaProducto />} />
					<Route path='/admin_edicion_producto/:id' element = {<EdicionProducto />} />

					<Route path='/admin_lista_categorias' element = {<ListaCategorias />} />
					<Route path='/admin_agregar_categoria' element = {<AgregarCategoria />} />
					<Route path='/admin_carga_categorias' element = {<CargaCategorias />} />
					<Route path='/admin_consulta_categoria/:id' element = {<ConsultaCategoria />} />
					<Route path='/admin_edicion_categoria/:id' element = {<EdicionCategoria />} />

					<Route path='/admin_lista_ordenes' element = {<ListaOrdenes />} />
					<Route path='/admin_carga_ordenes' element = {<CargaOrdenes />} />
					<Route path='/admin_consulta_orden/:id' element = {<ConsultaOrden />} />
					<Route path='/admin_consulta_orden/:id/:todas' element = {<ConsultaOrden />} />

					<Route path='/admin_lista_usuarios' element = {<ListaUsuarios />} />
					<Route path='/admin_agregar_usuario' element = {<AgregarUsuario />} />
					<Route path='/admin_carga_usuarios' element = {<CargaUsuarios />} />
					<Route path='/admin_consulta_usuario/:id' element = {<ConsultaUsuario />} />
					<Route path='/admin_edicion_usuario/:id' element = {<EdicionUsuario />} />

					<Route path='/carrito' element = {<Carrito />} />

				</Routes>
			</ContextCarrito>
			</SesionContext>
			<Footer />
		</div>
	);

};
