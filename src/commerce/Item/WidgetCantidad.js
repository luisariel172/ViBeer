
//
//	Widget de cantidad de articulos del item en galería
//

import React from 'react';
import './index.css'

//	Contexto del carrito
import { useContextCarrito } from '..';

function WidgetCantidad({ id }) {

	//	Cantidad del item en el carrito de compra
	const { getCantidadById } = useContextCarrito()
	const cantidad = getCantidadById(id);

	return (
		cantidad ? 
			<div
				className='div-widget-cantidad'
				title = 'Cantidad en carrito'
			>
				<span className={'badge span-insignia-cantidad'}>
					{cantidad}
				</span>
			</div>
		: ''
	);
}

export default WidgetCantidad;
