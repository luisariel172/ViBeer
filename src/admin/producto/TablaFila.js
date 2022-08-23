
//
//	Renderiza fila de tabla de carrito
//

import React from 'react';

function FilaTabla({ producto }) {

	return (
		<tr className='text-white'>
			<td>
				{producto.id}
			</td>
			<td>
				{producto.nombre}
			</td>
			<td className='text-end'>
				$ {producto.precio}
			</td>
			<td className='text-end'>
				{producto.stock}
			</td>
			<td>
				{producto.categoria}
			</td>
			<td className='col-3'>
				{producto.imagen}
			</td>
			<td className='text-end'>
				<button
					title = 'Editar'
					onClick = {() => {}}
				><i className='fas fa-pen'></i></button>
				{' '}
				<button
					title = 'Borrar'
					onClick = {() => {}}
				><i className='fas fa-trash'></i></button>
			</td>
		</tr>
	);
};

export default FilaTabla;
