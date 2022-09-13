
//
//	Renderiza botón genérico para agregar item en lista de items
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	Default !!!
export default function BotonAgregarItem({
		singularCol, texto
	}) {

	//	Valida y resuelve parámetros
	if (!singularCol) return 'Falta info.';
	texto = texto || `Agregar ${singularCol}`;

	//	Ejecuta botón
	const navegar = useNavigate();

	//	Render !!!
	return (
		<div>
			<button
				className='btn'
				onClick={() => navegar(`/admin_agregar_${singularCol}`)}
			>
				{texto}
			</button>
		</div>
	);

};
