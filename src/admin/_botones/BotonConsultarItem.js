
//
//	Renderiza botón genérico de consulta de item en fila de lista
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';

//	Default !!!
export default function BotonConsultarItem({ linkWithId	}) {

	//	Valida parámetros
	if (!linkWithId) return 'Falta info.';

	// Render
	return (
		<Link to={`${linkWithId}`}>
			<button title='Consultar'>
				<i className='fas fa-binoculars'></i>
			</button>
		</Link>
	);

};
