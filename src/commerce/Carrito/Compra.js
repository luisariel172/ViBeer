
//
//	Gestiona la compra
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { increment, updateDoc } from 'firebase/firestore';

//	Propio !!!
import { getRefDoc } from '../../api/db';
import { hayErroresForm } from '../../admin/funAdmin';
import { alertaToast } from '../../funciones';
import { useContextCarrito } from '../';
import { grabaUsuario } from './funUsuario';
import { getOrdenInicial, grabaOrden } from './funOrden';
import CompraForm from './CompraForm';

//	Default !!!
export default function Compra({ lineas }) {

	//	Obtiene funciones del carrito
	const { getTotalCarrito, reset } = useContextCarrito();

	//	Navegador para ir a la orden
	const navegar = useNavigate();

	//	Datos iniciales de la orden
	const item = getOrdenInicial();

	//	Ejecuta la compra
	const comprar = ( itemForm ) => {

		//	Decide grabación
		if (hayErroresForm(itemForm)) {
			alertaToast('Información faltante o errónea.');
		} else {

			//	Actualiza usuario !!!
			grabaUsuario(itemForm)
			.then((usuario) => {

				//	id de usuario
				itemForm.id_usuario.valor = usuario.id;

				//	Graba orden !!!
				grabaOrden(itemForm, lineas, getTotalCarrito())
				.then((orden) => {
					updateStock()
					reset();
					navegar(
						`/admin_consulta_orden/${orden.id}/todas`,
						{ state: { msjToast: 'Compra exitosa !!!' } }
					)
				});
			});
		};

		//	Actualiza stock
		const updateStock = () => {
			lineas.forEach( async lc => {
				const itemRef = getRefDoc('productos', lc.id)
				await updateDoc(itemRef, {
					stock: increment(-lc.cantidad)
				})
			});
		};

	};

	//	Render !!!
	return (
		<div className='col ms-0'>
			<h4>Confirmá la operación</h4><br/>

			<CompraForm
				item={item}
				funEjecutar={comprar}
			/>

		</div>
	);

};
