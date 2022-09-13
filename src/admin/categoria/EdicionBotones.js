
//
//	Renderiza botones para edición de categoría
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
			coleccion='categorias'
			linkExito='/admin_consulta_categoria'
		/>
		<BotonCancelarForm
			link='/admin_lista_categorias'
		/>
		</>
	);
};
