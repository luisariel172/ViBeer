
//
//	Carga y renderiza órdenes iniciales
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import DivCargaInicialAdmin from '../_wrappers/DivCargaInicialAdmin';
import ListaTabla from './ListaTabla';

//	Default !!!
export default function Carga() {

	//	Render !!!
	return (
		<DivCargaInicialAdmin
			coleccion='ordenes'
			titulo='Carga de órdenes iniciales'
		>
			<ListaTabla />
		</DivCargaInicialAdmin>
	);

};
