
//
//	Renderiza tabla de consulta de orden
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Bootstrap !!!
import Table from 'react-bootstrap/Table';

//	CSS !!!
import '../index.css';

//  Default !!!
export default function FormularioTabla({ itemForm }) {

	//	State de Items y total
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		if (itemForm.items) {
			setItems(itemForm.items.valor);
			setTotal(itemForm.total.valor);
		};
	}, [itemForm]);

	//	Render !!!
	return (
		<Table responsive className='text-white'>

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
