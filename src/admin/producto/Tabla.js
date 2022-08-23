
//
//	Renderiza tabla de productos
//

import React from 'react';

//	Tabla de bootstrap
import Table from 'react-bootstrap/Table';
import './index.css';

//  Fila de la tabla
import TablaFila from './TablaFila';

function Tabla({ productos }) {

	return (
		<div className='table responsive'>
		<Table className='text-white'>

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
					<TablaFila key={p.id} producto={p} />
				)}
			</tbody>

		</Table>
		</div>
	);
};

export default Tabla;
