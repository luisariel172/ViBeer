
//
//	Renderiza formulario para agregar categoría
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import DivFormAdmin from '../DivFormAdmin';
import Formulario from './Formulario';
import AgregarBotones from './AgregarBotones';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function Agregar() {

	//	Item vacío
	const itemVacio = {id: '', nombre: ''};

	//	Render !!!
	return (
		<DivFormAdmin titulo='Nueva categoría' subTitulo='Datos básicos'>
			<Formulario
				item={itemVacio}
				Botonera={AgregarBotones}
			/>
		</DivFormAdmin>
	)

};
