
//
//	Renderiza fila de tabla de orden
//

import React from 'react';
import '../index.css';

import { Link } from 'react-router-dom';

function TablaFila({ item, borrarItem }) {

	return (
		<tr className='text-white'>
			<td title={item.id}>
				{item.id}
			</td>
			<td>
				{item.fecha}
			</td>
			<td>
				{item.comprador.nombre}
			</td>
			<td>
				{item.items[0].nombre + '...'}
			</td>
			<td className='text-end'>
				{item.total}
			</td>

			<td className='text-end'>
				<Link to={'/admin_consulta_orden/'+ item.id}>
					<button title = 'Consultar'>
						<i className='fas fa-binoculars'></i>
					</button>
				</Link>
				{' '}
				<button
					title = 'Editar'
					onClick = {() => {}}
				><i className='fas fa-pen'></i></button>
				{' '}
				<button
					title = 'Borrar'
					onClick = {() => {borrarItem(item.id)}}
				><i className='fas fa-trash'></i></button>
			</td>

		</tr>
	);
};

export default TablaFila;
