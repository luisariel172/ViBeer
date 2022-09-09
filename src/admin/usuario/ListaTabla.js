
//
//	Renderiza tabla de usuarios
//

//	Framework !!!
import React from 'react';

//	Hoock q actualiza la lista desde el servidor
import { useCollection } from 'react-firebase-hooks/firestore';

//	Acceso a DB
import { db, collection } from '../../api/conexion';
import { borrarDoc } from '../../api/db'

//	Bootstrap !!!
import Table from 'react-bootstrap/Table';

//	CSS
import '../index.css';

//  Fila de la tabla
import ListaTablaFila from './ListaTablaFila';

//	Default !!!
export default function ListaTabla() {

	const coleccion = 'usuarios';
	const query = collection(db, coleccion);
	const [items] = useCollection(query);

	//	Función de borrado
	const borrarItem = (id) => {
		borrarDoc(coleccion, id)
	}
	return (
		<Table id='tabla-items' className='text-white'>

			<thead>
				<tr>
					<th>Id</th>
					<th>Nombre</th>
					<th>E-mail</th>
					<th>Acciones</th>
				</tr>
			</thead>

			<tbody>
				{items && items.docs
					.map((i) => ({ id: i.id, ...i.data() }))
                	.map((i) => (				
						<ListaTablaFila
							key={i.id}
							item={i}
							borrarItem={borrarItem}
						/>
					)
				)};
			</tbody>

		</Table>
	);
};
