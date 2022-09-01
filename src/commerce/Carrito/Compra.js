
//
//	Gestiona la compra
//

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextCarrito } from '..';

//	Fecha
import { fechaAMD } from '../../funciones';

//	Acceso a base de datos
import { creaItem, getRefDoc } from '../../api/db';
import { increment, updateDoc } from 'firebase/firestore';

//	Formulario
import CompraForm from './CompraForm';

import './index.css';

//	Default !!!
function Compra({ lineas }) {

	//	Obtiene funciones del carrito
	const { getTotalCarrito, reset } = useContextCarrito();

	//	Navegador para ir a la orden
	const navegar = useNavigate();

	//	Ejecuta la compra
	const comprar = (comprador) => {

		//	Orden a grabar
		const orden = {
			fecha: fechaAMD(),
			comprador: comprador,
			items: lineas.map(lc => {
					return {
						id: lc.id,
						nombre: lc.nombre,
						precio: lc.precio,
						cantidad: lc.cantidad
					}
				}),
			total: getTotalCarrito()
		}

		//	Actualiza stock
		const updateStock = () => {
			lineas.forEach( async lc => {
				const itemRef = getRefDoc('productos', lc.id)
				await updateDoc(itemRef, {
					stock: increment(-lc.cantidad)
				})
			});
		};

		//	Crea orden, actualiza stock, resetea carrito y dirije a consulta
		creaItem('ordenes', orden)
			.then((item) => {
				updateStock()
				reset();
				navegar('/admin_consulta_orden/' + item.id + '/todas');
			});

	};

	return (

		<div className='col ms-0'>
			<h4>Confirme la operación</h4><br/>
			<CompraForm ejecutar={comprar}/>
		</div>
	);

};

export default Compra;
