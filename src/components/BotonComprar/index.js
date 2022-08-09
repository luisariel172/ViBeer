
//
//	Botón-comprar que es renderizado en cada item
//

//	Botón bootstrap
import Button from 'react-bootstrap/Button';

//	Contador-de-compra del widget de carrito
import { useContCompraContext } from '../ContadorCompra';

function BotonComprar({ caption }) {

	//	Acción de suma del contador de compra
	const { sumar } = useContCompraContext();

	return (
		<Button className='mx-2' variant='primary' onClick={() => sumar()}>
			{caption || 'Comprar'}
		</Button>
	);
}

export default BotonComprar;
