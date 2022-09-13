
//
//	Carga y renderiza usuarios iniciales
//

//	Framewiork !!!
import React from 'react';

//	Propio !!!
import DivCargaInicialAdmin from '../_wrappers/DivCargaInicialAdmin';
import ListaTabla from './ListaTabla';

//	Default !!!
export default function Carga() {

	return (
		<DivCargaInicialAdmin
			coleccion='usuarios'
		>
			<ListaTabla />
		</DivCargaInicialAdmin>
	)

};
