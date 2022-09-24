
//
//	Renderiza botones para registrarse
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonGrabarItem from '../../admin/_botones/BotonGrabarItem';
import BotonCancelarForm from '../../admin/_botones/BotonCancelarForm';

//	Default !!!
export default function RegistroBotones({ itemForm }) {

	//	Render !!!
	return (
		<>
		<BotonGrabarItem
			itemForm = {itemForm}
			coleccion = 'usuarios'
			linkExito = '/sesion_con_usuario'
			texto = 'Registrarse'
			msjExito = 'Registro exitoso !!!'
		/>
		<BotonCancelarForm
			link='/todas'
		/>
		</>
	);
};
