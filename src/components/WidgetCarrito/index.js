
//
//	Widget de carrito de compra
//

import './index.css'
import Imagen from '../../../src/assets/cart-fill.svg';

//	Contexto del carrito
import { useContextCarrito } from '../';

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
			<img src={Imagen} alt='badge' />
			<span className={'badge span-insignia-carrito'}
			>
				{articulos}
			</span>
		</div>
	);
}

export default WidgetCarrito;
