
//
//	Renderiza formulario para agregar categoría
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import DivFormAdmin from '../_wrappers/DivFormAdmin';
import Formulario from './Formulario';
import AgregarBotones from './AgregarBotones';

//	Default !!!
export default function Agregar() {

	//	Item vacío
	const itemVacio = {
		id: '', nombre: ''
	};

	//	Render !!!
	return (
		<DivFormAdmin
			titulo='Nueva categoría'
		>
			<Formulario
				item={itemVacio}
			>
				<AgregarBotones />
			</Formulario>
		</DivFormAdmin>
	)

};
