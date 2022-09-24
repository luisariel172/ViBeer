
//
//	Renderiza link de sesión
//

//	Framework !!!
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { alertaToast, confirmSwal } from '../../funciones';
import { useSesionContext } from '../../commerce';

//	Bootstrap !!!
import { Nav } from 'react-bootstrap';

//	CSS !!!
import './index.css'

//	Default !!!
export default function WidgetSesion({ funActualizar }) {

	//	Navegador para moverse
	const navegar = useNavigate();
	
    //	Sesión y funciones de Context
	const { sesion, sesionValida, accionLogout } = useSesionContext();
	const [ haySesion, setHaySesion ] = useState(false);
	useEffect(() => {
		setHaySesion(sesionValida());
	});

	//	Ejecuta link de ingreso
	const runLink = (evt) => {
		evt.preventDefault();

		if (haySesion) {
			confirmSwal('¿ Deseas cerrar sesión ?', 'Logout')
			.then(respuesta => {
				if (respuesta.isConfirmed) {
					accionLogout();
					alertaToast('Logout !!!', 'success');
				};
			});
		} else {
			navegar('/login');
		};
	};

	//	Render !!!
	return (
		<Nav.Link
			onClick={runLink}
			title = {haySesion ? 'Logout' : 'Login'}
		>
			<i className='fa fa-user px-2' aria-hidden='true'></i>
			{haySesion ? sesion.usuario : 'Ingresá'}
		</Nav.Link>
	)

};
