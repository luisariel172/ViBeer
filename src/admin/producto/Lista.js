
//
//	Renderiza lista de productos con tabla
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
			coleccion='productos'
			singularCol='producto'
			ListaTabla={ListaTabla}
			titulo='Productos'
		/>
	)

};
