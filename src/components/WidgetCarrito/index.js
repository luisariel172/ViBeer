
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

	//	Cantidad de líneas del carrito
	const { lineasCarrito } = useContextCarrito();

	return (
		<div
			title = 'Ir al carrito'
			className='btn div-widget'
			onClick={()=>{navegar('/carrito')}}
		>
			<img src={Imagen} alt='badge' />
			<span className={'badge span-insignia ' +
				'contador-' + (lineasCarrito.length < 10 ? 'menor10' : 'mayor9')}
			>
				{lineasCarrito.length}
			</span>
		</div>
	);
}

export default WidgetCarrito;
