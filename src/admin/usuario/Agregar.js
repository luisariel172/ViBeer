
//
//	Renderiza formulario para agregar usuario
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import DivFormAdmin from '../_wrappers/DivFormAdmin';
import Formulario from './Formulario';
import AgregarBotones from './AgregarBotones';

//	Usuario con datos iniciales
export const usuarioInicial = {
	id: '', nombre: '', telefono: '', email: '', direccion: '', passw: ''
};

//	Default !!!
export default function Agregar() {

	//	Render !!!
	return (
		<DivFormAdmin
			titulo='Nueva usuario'
		>
			<Formulario
				item={usuarioInicial}
			>
				<AgregarBotones />
			</Formulario>
		</DivFormAdmin>
	)

};
