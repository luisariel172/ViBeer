
//
//	Renderiza botones para edición de categoría
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonActualizarItem from '../BotonActualizarItem';
import BotonCancelarForm from '../BotonCancelarForm';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function EdicionBotones({ itemForm }) {

	//	Render !!!
	return (
		<>
		<BotonActualizarItem
			itemForm={itemForm}
			coleccion='categorias'
			linkConsulta='/admin_consulta_categoria'
		/>
		<BotonCancelarForm
			link='/admin_lista_categorias'
		/>
		</>
	);
};
