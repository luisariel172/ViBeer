
//
//	Funciones para gestionar el usuario
//

//	Propio !!!
import { usuarioInicial as usuario } from '../../admin/usuario/Agregar';
import { creaItem, actualizaItem } from '../../api/db';
import { isNull } from '../../funciones';

//	Graba o actualiza usuario con item de formulario
export async function grabaUsuario(
		itemForm = {}
	) {

	//	colección y Id
	const colecion = 'usuarios';
	const id = itemForm.id_usuario.valor || '';

	//	Construye usuario a grabar
	delete usuario.id;
	usuario.nombre = itemForm.usuario.valor;
	usuario.telefono = itemForm.telefono.valor;
	usuario.email = itemForm.email.valor;
	usuario.direccion = itemForm.direccion.valor;
	usuario.passw = itemForm.passw.valor;

	//	Graba !!!
	if (isNull(id)) return await creaItem(colecion, usuario);

	//	Actualiza !!!
	return await actualizaItem(colecion, id, usuario)

};
