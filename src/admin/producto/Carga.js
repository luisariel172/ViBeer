
//
//	Carga productos iniciales
//

import React, { useState, useEffect } from 'react';
import { getCollection } from '../../api/db';
import { Link } from 'react-router-dom';

//	Tabla de bootstrap
import Table from 'react-bootstrap/Table';
import './index.css';

//  Fila de la tabla
import FilaTabla from './TablaFila';

function Carga() {

	const [productos, setProductos] = useState([]);
	useEffect(() => {
		async function getProductos() {
			await getCollection('productos')
				.then(productos => setProductos(productos));
		}
		getProductos();
	}, []);

	return (
		<div className='row div-tabla'>
			<div className='col-md-11'>

				<h2>Productos</h2>

				<Table responsive className='text-white'>

					<thead>
						<tr>
							<th>Id</th>
							<th>Nombre</th>
							<th>Precio</th>
							<th>Stock</th>
							<th>Id categoría</th>
							<th>URL imagen</th>
						</tr>
					</thead>

					<tbody>
						{productos.map((p) => 
							<FilaTabla key={p.id} producto={p} />
						)}
					</tbody>

				</Table>

				<div className='d-flex text-center my-5'>
					<Link to={'/todas'}>
						<button className='btn mr-3 px-3'>
							Agregar producto
						</button>
					</Link>
					<Link className='h-1/3' to={'/admin/producto_carga_inicial'}>
						<button className='btn mx-5 px-3'>
							Cargar datos iniciales
						</button>
					</Link>
				</div>

			</div>
		</div>
	);
};

export default Carga;
