
//
//	Renderiza formulario para agregar usuario
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
		id: '',
		nombre: '',
		precio: 0,
		stock: 0,
		id_categoria: '',
		categoria: ''
	};

	//	Render !!!
	return (
		<DivFormAdmin
			titulo='Nuevo producto'
		>
			<Formulario
				item={itemVacio}
			>
				<AgregarBotones />
			</Formulario>
		</DivFormAdmin>
	)

};
