
//
//	Renderiza botón genérico para agregar item en lista de items
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	CSS !!!
import './index.css';

//	Default !!!
export default function BotonAgregarItem({ singularCol, caption }) {

	//	Valida y resuelve parámetros
	if (!singularCol) return 'BtnLoad: Falta info.';
	if (!caption) caption = `Agregar ${singularCol}`;

	//	Ejecuta botón
	const navegar = useNavigate();

	//	Render !!!
	return (
		<div>
			<button
				className='btn'
				onClick={() => navegar(`/admin_agregar_${singularCol}`)}
			>
				{caption}
			</button>
		</div>
	);

};

/*
						<Link to={'/admin_agregar_categoria'} className='mx-5'>
							<button className='btn'>
								Agregar categoría
							</button>
						</Link>
*/
