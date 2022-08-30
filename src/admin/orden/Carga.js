
//
//	Carga órdenes iniciales
//

import React, { useEffect } from 'react';
import '../index.css';

//	Acceso a DB
import { borrarColeccion, creaItem } from '../../api/db';

//	Tabla
import Tabla from './Tabla';

function Carga() {

	//	Nombre de colección
	const coleccion = 'ordenes';

	//	Borra colección
	borrarColeccion(coleccion);

	//	Items iniciales
	useEffect(() => {

		//	Carga datos JSON desde ./public
		const getDatosJson = async () => {
			const respuesta = await fetch(`/datos.json`,)
			const objJson = await respuesta.json();
			let ret = objJson[coleccion];
			return ret;
		};
		getDatosJson().then(items => {
			items.forEach(item => {
				delete item.id;
				creaItem(coleccion, item);
			});
		});

	}, []);

	return (
		<div className='div-items'>
			<div className='container'>

				<div className='row py-3'>
					{/*	Título */}
					<div className='col'>
						<h2>Carga de {coleccion} iniciales</h2>
						<br />
					</div>
				</div>

				{/*	Tabla con los datos */}
				<div className='row mx-1'>
					<Tabla />
				</div>

			</div>
		</div>
	)

}

export default Carga;
