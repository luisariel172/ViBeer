
//
//	Renderiza botones para agregar categoría
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
			coleccion='categorias'
			linkExito='/admin_consulta_categoria'
		/>
		<BotonCancelarForm
			link='/admin_lista_categorias'
		/>
		</>
	);
};
