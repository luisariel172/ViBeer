
//
//	Botón-agregar-al-carrito de item de galería
//

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//	Botón bootstrap
import Button from 'react-bootstrap/Button';

//	Context de carrito
import { useContextCarrito } from '..';

function AgregarAlCarrito({ item, cantidad, onAdd }) {

	//	Navegador para ir al carrito
	const navegar = useNavigate();

    //  Bandera de agregado al carrito
    const [agregado, setAgregado] = useState(false);

	//	Acción de agregar línea al carrito
	const { agregarLinea } = useContextCarrito();

	return (
		<Button className='m-3' onClick={
			() => {
				if (!agregado) {
					agregarLinea(item, cantidad);
					onAdd();
					setAgregado(true);
				} else {
					navegar('/carrito');
				}
			}
		}>
			{ !agregado ?
				'Agregar al carrito' :
				'Ir al carrito'
			}
		</Button>
	);
}

export default AgregarAlCarrito;
