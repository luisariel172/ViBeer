
//
//	Renderiza fila de tabla de carrito
//

import React from 'react';

//	Importa context de carrito e imagen del item
import { useContextCarrito, ImagenDesdeGithub } from '..';

function FilaTablaCarrito({ linea }) {

	//	Acción borrar línea
	const { borrarLinea } = useContextCarrito();

	//	Lee imagen
	const imagen = ImagenDesdeGithub(linea.id);

	return (
		<tr className='text-white overflow-hidden'>
			<td className='text-left'>
				{linea.nombre}
			</td>
			<td>
				<img src={imagen} width={'70px'} alt={'xxx'}/>
			</td>
			<td className='text-center'>
				{linea.cantidad}
			</td>
			<td className='text-center'>
				$ {linea.precio}
			</td>
			<td className='text-center'>
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
