
//
//	Renderiza tabla de productos de carrito de compra
//

import React from 'react';

//	Context de carrito
import { useContextCarrito } from '../ContextCarrito';

//	Tabla de bootstrap
import Table from 'react-bootstrap/Table';
import './index.css';

//  Fila de la tabla
import TablaCarritoFila from './TablaCarritoFila';

function TablaCarrito({ lineas }) {

	//	Obtiene funciones del carrito
	const { getCantidadTotal, getTotalCarrito } = useContextCarrito();

	return (
		<Table responsive className='text-white tamaño-fuente-tabla'>

			<thead>
				<tr>
					<th>Producto</th>
					<th/>
					<th>Cantidad</th>
					<th>Precio</th>
					<th>Importe</th>
					<th/>
				</tr>
			</thead>

			<tbody>
				{lineas.map((linea) => 
					<TablaCarritoFila key={linea.id} linea={linea} />
				)}
			</tbody>

			<tfoot>
				<tr>
					<th/>
					<th>Totales</th>
					<th className='text-end'>{getCantidadTotal()}</th>
					<th/>
					<th className='text-end'>$ {getTotalCarrito()}</th>
					<th/>
				</tr>
			</tfoot>

		</Table>
	);
};

export default TablaCarrito;
