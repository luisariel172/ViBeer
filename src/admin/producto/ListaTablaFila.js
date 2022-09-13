
//
//	Renderiza fila de tabla de producto
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonConsultarItem from '../_botones/BotonConsultarItem';
import BotonEditarItem from '../_botones/BotonEditarItem';
import BotonBorrarItem from '../_botones/BotonBorrarItem';

//	Default !!!
export default function ListaTablaFila({ item }) {

	//	Render !!!
	return (
		<tr className='text-white'>
			<td title={item.id}>
				{item.id}
			</td>
			<td>
				{item.nombre}
			</td>
			<td className='text-end'>
				$ {item.precio}
			</td>
			<td className='text-end'>
				{item.stock}
			</td>
			<td>
				{item.id_categoria}
			</td>
			<td>
				{item.categoria}
			</td>
			<td title={item.imagen}>
				{item.imagen}
			</td>

			<td className='text-end'>
				<BotonConsultarItem
					linkWithId={`/admin_consulta_producto/${item.id}`}
				/>
				{' '}
				<BotonEditarItem
					linkWithId={`/admin_edicion_producto/${item.id}`}
				/>
				{' '}
				<BotonBorrarItem
					item={item}
					coleccion='productos'
					msjExito='Producto borrado.'
				/>
			</td>

		</tr>
	);
};
