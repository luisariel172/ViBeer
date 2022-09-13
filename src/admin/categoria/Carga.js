
//
//	Carga y renderiza categorías iniciales
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
			coleccion='categorias'
			titulo='Carga de categorías iniciales'
		>
			<ListaTabla />
		</DivCargaInicialAdmin>
	);

};
