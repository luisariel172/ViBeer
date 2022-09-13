
//
//	Renderiza botones para edición de usuario
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonActualizarItem from '../_botones/BotonActualizarItem';
import BotonCancelarForm from '../_botones/BotonCancelarForm';

//	Default !!!
export default function EdicionBotones({ itemForm }) {

	//	Render !!!
	return (
		<>
		<BotonActualizarItem
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
