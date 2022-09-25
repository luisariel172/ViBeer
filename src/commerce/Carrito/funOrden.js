
//
//	Funciones para gestionar la orden
//

//	Propio !!!
import { itemWithForm } from '../../admin/funAdmin';
import { creaItem, getDocument } from '../../api/db';
import { fechaAMD } from '../../funciones';
import { useSesionContext } from '../../commerce';
import { useEffect, useState } from 'react';
import { usuarioInicial } from '../../admin/usuario/Agregar';

//	Orden con datos iniciales
export function getOrdenInicial() {

    //	Sesión y funciones de Context
	const { sesion, sesionValida } = useSesionContext();

	//	Datos del usuario de sesión
	const [usuario, setUsuario] = useState({})
	useEffect(() => {

		//	Busca usuario si hay sesión válida
		const getItem = async () => {
			const ret = await getDocument('usuarios', sesion.id_usuario);
			return ret || usuarioInicial;
		};

		if (sesionValida()) {
			getItem().then(item => setUsuario(item));
		};

	}, [sesion]);

	return {
		fecha: fechaAMD(),
		id_usuario: usuario.id || '',
		usuario: usuario.nombre || '',
		telefono: usuario.telefono || '',
		email: usuario.email || '',
		direccion: usuario.direccion || '',
		passw: usuario.passw || '',
		total: 0
	}

};

//	Graba orden con item de formulario, líneas y total
export function grabaOrden(
		itemForm = {}, lineas = [], total = 0
	) {

	//	Construye orden a grabar
	delete itemForm.passw;
	const orden = itemWithForm(itemForm);
	orden['items'] = lineas.map(lc => {
			return {
				id: lc.id,
				nombre: lc.nombre,
				precio: lc.precio,
				cantidad: lc.cantidad
			}
		});
	orden['total'] = total;

	//	Graba !!!
	return creaItem('ordenes', orden);

};
