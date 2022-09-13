
//
//	Renderiza botones para agregar usuario
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonGrabarItem from '../_botones/BotonGrabarItem';
import BotonCancelarForm from '../_botones/BotonCancelarForm';

//	Default !!!
export default function AgregarBotones({ itemForm }) {

	//	Render !!!
	return (
		<>
		<BotonGrabarItem
			itemForm={itemForm}
			coleccion='usuarios'
			linkExito='/admin_consulta_usuario'
		/>
		<BotonCancelarForm
			link='/admin_lista_usuarios'
		/>
		</>
	);
};
