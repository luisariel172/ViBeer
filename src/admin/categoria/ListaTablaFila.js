
//
//	Renderiza fila de tabla de categoría
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';

//	Propio !!!
import ButtonBorrarItem from '../ButtonBorrarItem';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function ListaTablaFila({ item }) {
	
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
					<button title='Consultar'>
						<i className='fas fa-binoculars'></i>
					</button>
				</Link>
				{' '}
				<Link to={'/admin_edicion_categoria/'+ item.id}>
					<button title='Editar'>
						<i className='fas fa-pen'></i>
					</button>
				</Link>
				{' '}
				<ButtonBorrarItem
					item={item}
					coleccion='categorias'
					msjExito='Categoría borrada.'
				/>
			</td>

		</tr>
	);

};
