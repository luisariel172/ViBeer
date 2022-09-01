
//
//	Renderiza fila de tabla de carrito
//

import React from 'react';

//	Importa context de carrito e imagen del item
import { useContextCarrito } from '..';

function FilaTablaCarrito({ linea }) {

	//	Acción borrar línea
	const { borrarLinea } = useContextCarrito();

	return (
		<tr className='text-white overflow-hidden'>
			<td className='text-left'>
				{linea.nombre}
			</td>
			<td>
				<img src={linea.imagen} width={'70px'} alt={'xxx'}/>
			</td>
			<td className='text-end'>
				{linea.cantidad}
			</td>
			<td className='text-end'>
				$ {linea.precio}
			</td>
			<td className='text-end'>
				$ {linea.cantidad * linea.precio}
			</td>
			<td className='text-center'>
				<button
					title = 'Borrar línea'
					onClick = {() => borrarLinea(linea.id)}
				>X</button>
			</td>
		</tr>
	);
};

export default FilaTablaCarrito;
