
//
//	Widget de carrito de compra
//

import React from 'react';

import carritoVacio from '../../../src/assets/cart-empty.svg';
import carritoLleno from '../../../src/assets/cart-fill.svg';

import './index.css'

//	Contexto del carrito
import { useContextCarrito } from '../../commerce';

//	Navegación al carrito
import { useNavigate } from 'react-router-dom';

function WidgetCarrito() {

	//	Ir al carrito
	const navegar = useNavigate();

	//	Cantidad total de artículos del carrito
	const { getCantidadTotal } = useContextCarrito();
	const articulos = getCantidadTotal();

	return (
		<div
			className='btn button1 div-widget-carrito'
			onClick={()=>{navegar('/carrito')}}
			title='Ir al carrito'
		>
			<img
				src={articulos ? carritoLleno : carritoVacio}
				alt='badge'
			/>
			<span className={'badge span-insignia-carrito'}
			>
				{articulos ? articulos : ''}
			</span>
		</div>
	);
}

export default WidgetCarrito;
