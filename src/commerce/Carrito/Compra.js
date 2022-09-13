
//
//	Gestiona la compra
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { increment, updateDoc } from 'firebase/firestore';

//	Propio !!!
import { hayErroresForm, itemWithForm } from '../../admin/funAdmin';
import { fechaAMD, alertaToast } from '../../funciones';
import { creaItem, getRefDoc } from '../../api/db';
import { useContextCarrito } from '..';
import CompraForm from './CompraForm';

//	Default !!!
export default function Compra({ lineas }) {

	//	Obtiene funciones del carrito
	const { getTotalCarrito, reset } = useContextCarrito();

	//	Navegador para ir a la orden
	const navegar = useNavigate();

	//	Datos iniciales de la orden
	const item = {
		fecha: fechaAMD(),
		id_usuario: '',
		usuario: '',
		telefono: '',
		email: '',
		direccion: '',
		total: 0
	};

	//	Ejecuta la compra
	const comprar = ( itemForm ) => {

		//	Decide grabación
		if (hayErroresForm(itemForm)) {

			alertaToast('Información faltante o errónea.');

		} else {

			//	Orden a grabar
			const orden = itemWithForm(itemForm);
			orden['items'] = lineas.map(lc => {
					return {
						id: lc.id,
						nombre: lc.nombre,
						precio: lc.precio,
						cantidad: lc.cantidad
					}
				});
			orden['total'] = getTotalCarrito();

			//	Graba !!!
			creaItem('ordenes', orden)
			.then((item) => {
				updateStock()
				reset();
				navegar(
					`/admin_consulta_orden/${item.id}/todas`,
					{ state: { msjToast: 'Compra exitosa !!!' } }
				)
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
			<h4>Confirme la operación</h4><br/>
			<CompraForm
				item={item}
				funEjecutar={comprar}
			/>
		</div>
	);

};
