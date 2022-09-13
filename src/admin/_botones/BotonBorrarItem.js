
//
//	Renderiza botón genérico de borrado de item en fila de lista
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import { borrarDoc } from '../../api/db';
import { alertaToast, confirmSwal } from '../../funciones';

//	Default !!!
export default function BotonBorrarItem({
			item, coleccion, msjExito = 'Item borrado.'
		}) {

	//	Valida parámetros
	if (!item || !item.id || !coleccion) return 'Falta info.';

	//	Nombre de item a borrar
	const nombreItem = item.nombre || item.id || 'item';

	//	Función de borrado
	const borrarItem = () => {

		//	Confirma
		confirmSwal(`¿ Deseás borrar '${nombreItem}' ?`)
		.then((resultado) => {
			if (resultado.isConfirmed) {
				borrarDoc(coleccion, item.id)
				.then(() => alertaToast(`${msjExito}`, 'success'))
				.catch(() => alertaToast(
					`Error borrando ${nombreItem}.`, 'error'
				));
			}
		});

	};

	// Render
	return (
		<button
			title='Borrar'
			onClick={() => {borrarItem(item.id)}}
		>
			<i className='fas fa-trash'></i>
		</button>
	);

};
