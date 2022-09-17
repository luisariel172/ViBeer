
//
//	Renderiza control Bootstrap según su tipo
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { getCollection } from '../../api/db';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';

//	Default !!!
export default function Control( props ) {

	//	Render !!!
	if (props.type === 'select') {
		return (
			<Form.Select { ...props }>
				<Opciones
					seleccion={props.seleccion}
				/>
			</Form.Select>
		);
	}
	return <Form.Control { ...props }/>;

};

//	Renderiza opciones para select con colección y campo
function Opciones({ seleccion }) {

	//	Lee items para select
	const [items, setItems] = useState(['']);
	useEffect(() => {
		async function getItems() {
			await getCollection(seleccion.coleccion)
			.then(items => items.map(item => item[seleccion.campo]))
			.then(items => setItems(['', ...items]));
		}
		getItems()
	}, [seleccion])

	//	Render !!!
	return (
		<>
 		<option className='d-none' value=''>
			* Selecciona una categoría
        </option>
		{items && items.map(opc =>
			<option
				key={`clave_${opc}`}
				value={opc}
			>
				{opc}
			</option>
		)}
		</>
	)
};
