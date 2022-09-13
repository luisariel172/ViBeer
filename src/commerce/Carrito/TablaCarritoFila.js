
//
//	Renderiza fila de tabla de carrito
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import { useContextCarrito } from '..';

//	Default !!!
export default function FilaTablaCarrito({ linea }) {

	//	Acción borrar línea
	const { borrarLinea } = useContextCarrito();

	//	Render !!!
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
