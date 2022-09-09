
//
//	Renderiza lista de productos con tabla
//

//	Framework
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//	Acceso a DB
import { getCollection } from '../../api/db';

//	Tabla
import ListaTabla from './ListaTabla';

//	CSS
import '../index.css';

export default function Lista() {

	//	Nombre de colección
	const coleccion = 'productos';

	//	Lee productos
	const [items, setItems] = useState([]);
	useEffect(() => {
		async function getItems() {
			await getCollection(coleccion)
				.then(items => setItems(items));
		}
		getItems();
	}, []);

	return (
		<div className='div-admin'>
			<div className='container'>

				<div className='row py-3 justify-content-between'>

					{/*	Título */}
					<div className='col-4'>
						<h2>Productos</h2>
						<br />
					</div>

					{/*	Botones	de acción */}
					<div className='col d-flex justify-content-end'>
						<Link to={'/admin_agregar_producto'} className='mx-5'>
							<button className='btn'>
								Agregar producto
							</button>
						</Link>
						<Link to={'/admin_carga_productos'}>
							<button className='btn'>
								Cargar datos iniciales
							</button>
						</Link>
					</div>

				</div>

				{/*	Tabla con los datos */}
				<div className='row mx-1'>
					<ListaTabla items={items} />
				</div>

			</div>
		</div>
	)

};
