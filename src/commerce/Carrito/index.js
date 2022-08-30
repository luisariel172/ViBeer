
//
//	Renderiza carrito de compra
//

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContextCarrito } from '..';
import { fechaAMD } from '../../funciones';

//	Acceso a base de datos
import { creaItem, getRefDoc } from '../../api/db';

//	Tabla
import TablaCarrito from './TablaCarrito';

import './index.css';
import { increment, updateDoc } from 'firebase/firestore';

function Carrito() {

	//	Obtiene funciones del carrito
	const { getTotalCarrito } = useContextCarrito();

	//	Navegador para ir a la orden
	const navegar = useNavigate();

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

	//	Ejecuta la compra
	const comprar = () => {

		//	Orden a grabar
		const orden = {
			fecha: fechaAMD(),
			comprador: 
				{
					nombre: 'Fabricio Pereyra',
					telefono: '3815123456',
					email: 'fabry@server.com'
				}
			,
			items:
				lineasCarrito.map(lc => {
					return {
						id: lc.id,
						nombre: lc.nombre,
						precio: lc.precio,
						cantidad: lc.cantidad
					}
				}),
			total: getTotalCarrito()
		}

		//	Actualiza stock
		const updateStock = () => {
			lineasCarrito.forEach( async lc => {
				const itemRef = getRefDoc('productos', lc.id)
				await updateDoc(itemRef, {
					stock: increment(-lc.cantidad)
				})
			});
		};

		//	Crea orden, actualiza stock, resetea carrito y dirije a consulta
		creaItem('ordenes', orden)
			.then((item) => {
				updateStock()
				reset();
				navegar('/admin_consulta_orden/' + item.id + '/todas');
			});

	};

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
							onClick={() => comprar()}
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
