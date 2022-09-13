
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
		id: '', nombre: '', telefono: '', email: '', direccion: '', passw: ''
	};

	//	Render !!!
	return (
		<DivFormAdmin
			titulo='Nueva usuario'
		>
			<Formulario
				item={itemVacio}
			>
				<AgregarBotones />
			</Formulario>
		</DivFormAdmin>
	)

};
