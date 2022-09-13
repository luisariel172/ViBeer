
//
//	Botón Agregar-al-carrito de detalle de item
//

//	Framework !!!
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//	Context de carrito
import { useContextCarrito } from '..';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';
import { alertaToast } from '../../funciones';

//	Default !!!
export default function AgregarAlCarrito({
		item, cantidad, onAdd
	}) {

	//	Navegador para ir al carrito
	const navegar = useNavigate();

    //  Bandera de agregado al carrito
    const [agregado, setAgregado] = useState(false);

	//	Acción de agregar línea al carrito
	const { agregarLinea } = useContextCarrito();

	//	Ejecuta botón
	const runBoton = (evt) => {

		evt.preventDefault();

		if (!agregado) {
			if (item.stock <= cantidad) {
				alertaToast('No hay suficiente stock.')
			} else {
				agregarLinea(item, cantidad);
				onAdd();
				setAgregado(true);
			};
		} else {
			navegar('/carrito');
		}
	}

	//	Render !!!
	return (
		<Button
			className='m-3'
			onClick={runBoton}
		>
			{ !agregado
				? 'Agregar al carrito'
				: 'Ir al carrito'
			}
		</Button>
	);

};
