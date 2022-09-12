
//
//	Renderiza botón genérico cancelar para formulario
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import './index.css';

//	Default !!!
export default function BotonCancelarForm({ link }) {

	//	Valida prámetro
	if (!link) return 'BtnCan: Falta info';

	//	Render !!!
	return (
		<Link to={link}>
			<Button size='md' className='w-25'>
				Cancelar
			</Button>
		</Link>
	);
};
