
//
//	Renderiza fila de tabla de categoría
//

//	Framework
import React from 'react';
import { Link } from 'react-router-dom';

//	CSS
import '../index.css';

//	Default !!!
export default function TablaFila({ item, borrarItem }) {
	
	// Render
	return (
		<tr className='text-white'>
			<td title={item.id}>
				{item.id}
			</td>
			<td>
				{item.nombre}
			</td>

			<td className='text-end'>
				<Link to={'/admin_consulta_categoria/'+ item.id}>
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
