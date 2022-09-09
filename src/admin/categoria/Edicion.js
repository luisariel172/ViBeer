
//
//	Renderiza formulario de edición de categoría
//

//	Framework
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//	Propio !!!
import lee from './lee';
import DivFormAdmin from '../DivFormAdmin';
import Formulario from './Formulario';
import EdicionBotones from './EdicionBotones';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function Edicion() {

	//	Captura parámetro id de URL
	const { id } = useParams();

	//	Lee categoría
	const [itemDoc, setItemDoc] = useState({});
	useEffect(() => {
		lee(id).then(item => setItemDoc(item))
	}, []);

	//	Render !!!
	return (
		<DivFormAdmin titulo='Edición de categoría' subTitulo='Datos básicos'>
			<Formulario
				item={itemDoc}
				Botonera={EdicionBotones}
			/>
		</DivFormAdmin>
	);

};
