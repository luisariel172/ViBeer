
//
//	Renderiza botones para agregar producto
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
			coleccion='productos'
			linkExito='/admin_consulta_producto'
		/>
		<BotonCancelarForm
			link='/admin_lista_productos'
		/>
		</>
	);
};
