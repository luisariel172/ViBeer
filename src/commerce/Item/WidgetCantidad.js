
//
//	Widget de cantidad de articulos del item en galería
//

//	Framework !!!
import React from 'react';

//	Contexto del carrito
import { useCarritoContext } from '..';

//	CSS !!!
import './index.css'

//	Default !!!
export default function WidgetCantidad({ id }) {

	//	Cantidad del item en el carrito de compra
	const { getCantidadById } = useCarritoContext()
	const cantidad = getCantidadById(id);

	//	Render !!!
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
};
