
//
//	Renderiza tabla de órdenes
//

//	Framework !!!
import React from 'react';

//	Hoock q actualiza la lista desde el servidor
import { useCollection } from 'react-firebase-hooks/firestore';

//	Propio !!!
import { db, collection } from '../../api/conexion';
import ListaTablaFila from './ListaTablaFila';

//	Bootstrap !!!
import Table from 'react-bootstrap/Table';

//	CSS !!!
import '../index.css';

export default function ListaTabla() {

	//	Actualiza automáticamente los datos
	const coleccion = 'ordenes';
	const query = collection(db, coleccion);
	const [items] = useCollection(query);

	//	Render !!!
	return (
		<Table id='tabla-items' className='text-white'>

			<thead>
				<tr>
					<th>Id</th>
					<th>Fecha</th>
					<th>Usuario</th>
					<th>Teléfono</th>
					<th>E-mail</th>
					<th>Productos</th>
					<th>Total</th>
					<th>Acciones</th>
				</tr>
			</thead>

			<tbody>
				{items && items.docs
					.map((doc) => ({ id: doc.id, ...doc.data() }))
                	.map((item) => (				
						<ListaTablaFila
							key={item.id}
							item={item}
						/>
					)
				)}
			</tbody>

		</Table>
	);

};
