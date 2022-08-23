
//
//	Renderiza carrito de compra
//

import React from 'react';

import { Link } from 'react-router-dom';
import { useContextCarrito } from '..';
import './index.css';

//	Tabla
import TablaCarrito from './TablaCarrito';

function Carrito() {

    //	Acceso a contexto de carrito
	const { lineasCarrito, reset } = useContextCarrito();

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

			<div className='d-flex justify-content-center'>
				<div className='row mt-5'>

					<div className='col-8 mx-2'>
						<h4>Lista</h4><br/>
						<TablaCarrito lineas={lineasCarrito} />
					</div>

					<div className='col px-5'>
						<h4>Confirme la operación</h4><br/>
						<button
							className='btn mt-3'
							onClick={() => reset()}
						>
							Comprar
						</button>
					</div>

				</div>
			</div>
		</div>
    );
};

export default Carrito;
