
//
//	Renderiza botón genérico de cancelación en formulario
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	Default !!!
export default function BotonCancelarForm({ link }) {

	//	Valida prámetro
	if (!link) return 'Falta info.';

	//	Render !!!
	return (
		<Link to={link}>
			<Button size='md' className='w-25'>
				Cancelar
			</Button>
		</Link>
	);
};
