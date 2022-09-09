
//
//	Renderiza fila de tabla de usuarios
//

//	Framework !!!
import React from 'react';

//	CSS
import '../index.css';

//	Default !!!
export default function ListaTablaFila({ item, borrarItem }) {

	return (
		<tr className='text-white'>
			<td title={item.id}>
				{item.id}
			</td>
			<td>
				{item.nombre}
			</td>
			<td>
				{item.mail}
			</td>

			<td className='text-end'>
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
