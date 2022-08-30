
//
//	Renderiza tabla de consulta de orden
//

import React from 'react';

//	Bootstrap !!!
import Table from 'react-bootstrap/Table';
import '../index.css';

//  Tabla con items de la orden
function ConsultaTabla({ items, total }) {

	return (
		<Table responsive className='text-white consulta-tabla'>

			<thead>
				<tr>
					<th>Id</th>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Cantidad</th>
					<th>Importe</th>
				</tr>
			</thead>

			<tbody>
				{items.map((linea) => 
					<tr key={linea.id} className='text-white overflow-hidden'>
						<td>
							{linea.id}
						</td>
						<td>
							{linea.nombre}
						</td>
						<td className='text-end'>
							$ {linea.precio}
						</td>
						<td className='text-end'>
							{linea.cantidad}
						</td>
						<td className='text-end'>
							$ {linea.cantidad * linea.precio}
						</td>
					</tr>
				)}
			</tbody>

			<tfoot>
				<tr className='text-center'>
					<th/>
					<th/>
					<th/>
					<th className='text-end'>Total</th>
					<th className='text-end'>$ {total}</th>
				</tr>
			</tfoot>

		</Table>
	)
};

export default ConsultaTabla;
