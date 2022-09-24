
//
//	Inicia sesión con id de usuario y renderiza galería
//

//	Framework !!!
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//	Propio !!!
import { isNull, alertaToast } from '../../funciones';
import { getDocument } from '../../api/db';
import { useSesionContext, ItemListContainer } from '../index';

//	Default !!!
export default function SesionConUsuario() {

	//	Captura id de URL
	const { id } = useParams();

    //	Acción login de Context
	const { accionLogin } = useSesionContext();

	//	Busca el usuario
	const [usuario, setUsuario] = useState({});
	useEffect(() => {
		getDocument('usuarios', id)
		.then(item => setUsuario(item));
	}, []);

	//	Registra login
	useEffect(() => {
		if (!isNull(usuario)) {
			const sesion = {email: usuario.email, usuario: usuario.nombre, passw: usuario.passw, id_usuario: usuario.id}
			accionLogin(sesion);
			alertaToast(`Hola ${sesion.usuario} !!!`, 'success');
		};
	}, [usuario]);

	//	Render !!!
	return (
		<ItemListContainer />
	)

};
