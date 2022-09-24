
//
//	Renderiza formulario para registrarse
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import DivFormAdmin from '../../admin/_wrappers/DivFormAdmin';
import Formulario from '../../admin/usuario/Formulario';
import RegistroBotones from './RegistroBotones';

//	Objeto-usuario con datos iniciales
import { usuarioInicial } from '../../admin/usuario/Agregar';

//	Default !!!
export default function Registro() {

	//	Render !!!
	return (
		<DivFormAdmin
			titulo='Registrarse'
			subTitulo='Ingrese datos de nuevo usuario'
		>
			<Formulario
				item={usuarioInicial}
			>
				<RegistroBotones />
			</Formulario>
		</DivFormAdmin>
	)

};
