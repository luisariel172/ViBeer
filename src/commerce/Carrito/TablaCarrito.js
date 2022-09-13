
//
//	Renderiza tabla de productos de carrito de compra
//

//	Framework !!!
import React from 'react';
import { useContextCarrito } from '../ContextCarrito';

//  Propio !!!
import TablaCarritoFila from './TablaCarritoFila';

//	Bootstrap !!!
import Table from 'react-bootstrap/Table';

//	Default !!!
export default function TablaCarrito({ lineas }) {

	//	Obtiene funciones del carrito
	const { getCantidadTotal, getTotalCarrito } = useContextCarrito();

	//	Render !!!
	return (
		<Table responsive className='text-white'>

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
					<TablaCarritoFila
						key={linea.id}
						linea={linea}
					/>
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
