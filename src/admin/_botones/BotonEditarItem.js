
//
//	Renderiza botón genérico de edición de item en fila de lista
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';

//	Default !!!
export default function BotonEditarItem({ linkWithId	}) {

	//	Valida parámetros
	if (!linkWithId) return 'Falta info.';

	// Render
	return (
		<Link to={`${linkWithId}`}>
			<button title='Editar'>
				<i className='fas fa-pen'></i>
			</button>
		</Link>
	);

};
