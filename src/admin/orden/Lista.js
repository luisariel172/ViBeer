
//
//	Renderiza lista de órdenes con tabla
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
			coleccion='ordenes'
			singularCol='orden'
			ListaTabla={ListaTabla}
			titulo='Órdenes'
			noAgregar={true}
		/>
	)

};
