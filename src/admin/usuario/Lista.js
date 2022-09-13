
//
//	Renderiza lista de categorías con tabla
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import DivListaAdmin from '../_wrappers/DivListaAdmin';
import ListaTabla from './ListaTabla';

//	Default !!!
export default function Lista() {

	//	Render !!!
	return (
		<DivListaAdmin
			coleccion='usuarios'
			singularCol='usuario'
			ListaTabla={ListaTabla}
			titulo='Usuarios'
		/>
	);

};
