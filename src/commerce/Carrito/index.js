
//
//	Renderiza carrito de compra
//

import React from 'react';
import { Link } from 'react-router-dom';
import { useContextCarrito } from '../';

//	Tabla
import TablaCarrito from './TablaCarrito';

//	Formulario de comprador
import Compra from './Compra';

import './index.css';

function Carrito() {

    //	Acceso a contexto de carrito
	const { lineasCarrito } = useContextCarrito();

    if (lineasCarrito.length === 0) {
        return (
            <div className='p-5 div-carrito'>
				<h2 className=''>
					Carrito vacío.
				</h2>
				<div className='d-flex text-center my-5'>
					<Link className='h-1/3' to={'/todas'}>
						<button className='btn p-2'>
							{' '}
							Ir a todas las cervezas
						</button>
					</Link>
				</div>
            </div>
        );
    }

    return (
		<div className='div-carrito'>

			<div className='container'>
				<h2>Carrito de compra</h2>
			</div>

			<div className='container'>
				<div className='row mt-5'>

					<div className='col me-5'>
						<h4>Items</h4><br/>
						<TablaCarrito lineas={lineasCarrito} />
					</div>

					<Compra lineas={lineasCarrito}/>

				</div>
			</div>
		</div>
    );
};

export default Carrito;
