
//
//	Funciones para gestionar el usuario
//

//	Propio !!!
import { usuarioInicial as usuario } from '../../admin/usuario/Agregar';
import { creaItem } from '../../api/db';

//	Graba usuario con item de formulario
export function grabaUsuario(
		itemForm = {}
	) {

	//	Construye usuario a grabar
	delete usuario.id;
	usuario.nombre = itemForm.usuario.valor;
	usuario.telefono = itemForm.telefono.valor;
	usuario.email = itemForm.email.valor;
	usuario.direccion = itemForm.direccion.valor;
	usuario.passw = '';

	//	Graba !!!
	return creaItem('usuarios', usuario);

};
