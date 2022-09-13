
//
//	Renderiza fila de tabla de orden
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonConsultarItem from '../_botones/BotonConsultarItem';
import BotonBorrarItem from '../_botones/BotonBorrarItem';

//	Default !!!
export default function TablaFila({ item, borrarItem }) {

	//	Render !!!
	return (
		<tr className='text-white'>
			<td title={item.id}>
				{item.id}
			</td>
			<td>
				{item.fecha}
			</td>
			<td>
				{item.usuario}
			</td>
			<td>
				{item.telefono}
			</td>
			<td>
				{item.email}
			</td>
			<td>
				{item.items[0].nombre + '...'}
			</td>
			<td className='text-end'>
				${item.total}
			</td>

			<td className='text-end'>
				<BotonConsultarItem
					linkWithId={`/admin_consulta_orden/${item.id}`}
				/>
				{' '}
				<BotonBorrarItem
					item={item}
					coleccion='ordenes'
					msjExito='Orden borrada.'
				/>
			</td>

		</tr>
	);

};
