
//
//	Renderiza lista de categorías con tabla
//

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

//	Acceso a DB
import { getCollection } from '../../api/db';

//	Tabla de productos
import Tabla from './Tabla';

function Lista() {

	//	Nombre de colección
	const coleccion = 'usuarios';

	//	Lee items
	const [items, setItems] = useState([]);
	useEffect(() => {
		async function getItems() {
			await getCollection(coleccion)
				.then(items => setItems(items));
		}
		getItems();
	}, []);

	return (
		<div className='div-items'>
			<div className='container'>

				<div className='row py-3 justify-content-between'>

					{/*	Título */}
					<div className='col-4'>
						<h2>Usuarios</h2>
						<br />
					</div>

					{/*	Botones	de acción */}
					<div className='col d-flex justify-content-end'>
						<Link to={'/admin_agregar_usuario'} className='mx-5'>
							<button className='btn'>
								Agregar usuario
							</button>
						</Link>
						<Link to={'/admin_carga_' + coleccion}>
							<button className='btn'>
								Cargar datos iniciales
							</button>
						</Link>
					</div>

				</div>

				{/*	Tabla con los datos */}
				<div className='row mx-1'>
					<Tabla items={items} />
				</div>

			</div>
		</div>
	)

}

export default Lista;
