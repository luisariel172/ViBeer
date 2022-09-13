
//
//	Renderiza formulario de consulta de categoría
//

//	Framework !!!
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

//	Propio !!!
import lee from './lee';
import DivConsultaAdmin from '../_wrappers/DivConsultaAdmin';
import Formulario from './Formulario';

//	Default !!!
export default function Consulta() {

	//	Captura parámetro id de URL
	const { id } = useParams();

	//	Captura parámetro-objeto de configuración
	const { state } = useLocation();

	//	Render !!!
	return (
		<DivConsultaAdmin
			Formulario={Formulario}
			funLee={lee}
			id={id}
			linkAceptar='/admin_lista_categorias'
			config={state}
			titulo='Consulta de categoría'
		/>
	);

};
