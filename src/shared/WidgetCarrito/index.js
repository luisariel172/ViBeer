
//
//	Widget de carrito de compra
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import carritoVacio from '../../../src/assets/cart-empty.svg';
import carritoLleno from '../../../src/assets/cart-fill.svg';
import { useCarritoContext } from '../../commerce';

//	CSS !!!
import './index.css'

//	Default !!!
export default function WidgetCarrito() {

	//	Ir al carrito
	const navegar = useNavigate();

	//	Cantidad total de artículos del carrito
	const { getCantidadTotal } = useCarritoContext();
	const articulos = getCantidadTotal();

	//	Render !!!
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

};
