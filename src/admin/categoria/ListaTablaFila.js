
//
//	Renderiza fila de tabla de categoría
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
				<BotonConsultarItem
					linkWithId={`/admin_consulta_categoria/${item.id}`}
				/>
				{' '}
				<BotonEditarItem
					linkWithId={`/admin_edicion_categoria/${item.id}`}
				/>
				{' '}
				<BotonBorrarItem
					item={item}
					coleccion='categorias'
					msjExito='Categoría borrada.'
				/>
			</td>

		</tr>
	);

};
