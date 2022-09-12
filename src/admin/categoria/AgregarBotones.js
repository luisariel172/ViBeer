
//
//	Renderiza botones para agregar categoría
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import BotonGrabarItem from '../BotonGrabarItem';
import BotonCancelarForm from '../BotonCancelarForm';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function AgregarBotones({ itemForm }) {

	//	Render !!!
	return (
		<>
		<BotonGrabarItem
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
