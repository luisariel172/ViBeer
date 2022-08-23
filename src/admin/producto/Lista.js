
//
//	Renderiza lista de productos
//

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//	Acceso a DB
import { getCollection } from '../../api/db';

//	Tabla de productos
import Tabla from './Tabla';

function Lista() {

	const [productos, setProductos] = useState([]);
	useEffect(() => {
		async function getProductos() {
			await getCollection('productos')
				.then(productos => setProductos(productos));
		}
		getProductos();
	}, []);

	return (
		<div className='div-lista'>
			<div className='container'>

				<div className='row py-3'>

					<div className='col-7'>
						<h2>Productos</h2>
					</div>

					<div className='col-2'>
						<Link to={'/todas'}>
							<button className='btn'>
								Agregar producto
							</button>
						</Link>
					</div>

					<div className='col-3'>
						<Link to={'/admin_carga_producto'}>
							<button className='btn'>
								Cargar datos iniciales
							</button>
						</Link>
					</div>

				</div>

				<div className='row'>
					<Tabla productos={productos} />
				</div>


			</div>
		</div>
	)

}

export default Lista;
