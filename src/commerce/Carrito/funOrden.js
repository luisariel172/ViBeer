
//
//	Funciones para gestionar la orden
//

//	Propio !!!
import { itemWithForm } from '../../admin/funAdmin';
import { creaItem } from '../../api/db';
import { fechaAMD } from '../../funciones';

//	Orden con datos iniciales
export function getOrdenInicial() {

	return {
		fecha: fechaAMD(),
		id_usuario: '',
		usuario: '',
		telefono: '',
		email: '',
		direccion: '',
		total: 0
	}

};

//	Graba orden con item de formulario, líneas y total
export function grabaOrden(
		itemForm = {}, lineas = [], total = 0
	) {

	//	Construye orden a grabar
	const orden = itemWithForm(itemForm);
	orden['items'] = lineas.map(lc => {
			return {
				id: lc.id,
				nombre: lc.nombre,
				precio: lc.precio,
				cantidad: lc.cantidad
			}
		});
	orden['total'] = total;

	//	Graba !!!
	return creaItem('ordenes', orden);

};
