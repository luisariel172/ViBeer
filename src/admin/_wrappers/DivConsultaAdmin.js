
//
//	Wrapper genérico de consulta de item
//

//	Framework !!!
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//	Propio !!!
import DivFormAdmin from './DivFormAdmin';
import { alertaToast } from '../../funciones';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	Botón aceptar
function BotonAceptar({ link }) {
	//	Render !!!
	return (
		<Link to={link}>
			<Button size='md' className='w-25'>
				Aceptar
			</Button>
		</Link>
	);
};

//	Default !!!
export default function DivConsultaAdmin({
		Formulario, funLee, id, linkAceptar, config, titulo, subTitulo
	}) {

	//	Valida parámetros
	if (!Formulario || !funLee || !id || !linkAceptar) return 'Falta info.';
	titulo = titulo || 'Consulta';
	subTitulo = subTitulo || 'Datos básicos';

	//	Configuración
	useEffect(() => {
		//	Lanza mensaje previo Toast de éxito !!!
		const { msjToast } = config || {};
		msjToast && alertaToast(msjToast, 'success');
	}, [])

	//	Lee item
	const [item, setItem] = useState({});
	useEffect(() => {
		funLee(id).then(item => setItem(item))
	}, []);

	//	Render !!!
	return (
		<DivFormAdmin
			titulo={titulo}
			subTitulo={subTitulo}
		>
			<Formulario
				item={item}
				modo='consulta'
			>
				<BotonAceptar
					link={linkAceptar}
				/>
			</Formulario>
		</DivFormAdmin>
	);

};
