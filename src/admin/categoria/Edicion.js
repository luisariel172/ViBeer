
//
//	Renderiza formulario de edición de categoría
//

//	Framework
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//	Propio !!!
import DivFormAdmin from '../_wrappers/DivFormAdmin';
import lee from './lee';
import Formulario from './Formulario';
import EdicionBotones from './EdicionBotones';

//	Default !!!
export default function Edicion() {

	//	Captura parámetro id de URL
	const { id } = useParams();

	//	Lee categoría
	const [item, setItem] = useState({});
	useEffect(() => {
		lee(id).then(item => setItem(item))
	}, []);

	//	Render !!!
	return (
		<DivFormAdmin
			titulo='Edición de categoría'
		>
			<Formulario
				item={item}
			>
				<EdicionBotones />
			</Formulario>
		</DivFormAdmin>
	);

};
