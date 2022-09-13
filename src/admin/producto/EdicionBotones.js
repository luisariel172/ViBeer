
//
//	Renderiza botones para edición de producto
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
			coleccion='productos'
			linkExito='/admin_consulta_producto'
		/>
		<BotonCancelarForm
			link='/admin_lista_productos'
		/>
		</>
	);
};
