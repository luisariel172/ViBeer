
//
//	Renderiza fila de tabla de usuarios
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
			<td>
				{item.telefono}
			</td>
			<td>
				{item.email}
			</td>
			<td>
				{item.direccion}
			</td>
			<td>
				****************
			</td>

			<td className='text-end'>
				<BotonConsultarItem
					linkWithId={`/admin_consulta_usuario/${item.id}`}
				/>
				{' '}
				<BotonEditarItem
					linkWithId={`/admin_edicion_usuario/${item.id}`}
				/>
				{' '}
				<BotonBorrarItem
					item={item}
					coleccion='usuarios'
					msjExito='Usuario borrado.'
				/>
			</td>

		</tr>
	);
};
