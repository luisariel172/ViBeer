
//
//	Carga productos iniciales
//

import React, { useEffect } from 'react';
import '../index.css';

//	Acceso a DB
import { db, collection, addDoc } from '../../api/conexion';
import { borrarColeccion, getCollectionWithQuery } from '../../api/db';

//	Tabla
import Tabla from './Tabla';

function Carga() {

	//	Nombre de colección
	const coleccion = 'productos';

	//	Borra colección
	borrarColeccion(coleccion);

	//	Items iniciales
	useEffect(() => {

		//	Devuelve el id de una categoría con nombre
		const getIdCategoriaByName = async (nombre) => {
			const ret = await getCollectionWithQuery(
				'categorias', ['nombre', '==', nombre]);
			return ret[0] ? ret[0].id : '';
		}

		//	Crea un producto en la colección
		const creaItem = async (item) => {
			await addDoc(collection(db, coleccion), item);
		};

		//	Carga datos JSON desde ./public
		const getDatosJson = async () => {
			const respuesta = await fetch(`/datos.json`,)
			const objJson = await respuesta.json();
			let ret = objJson[coleccion];
			return ret;
		};
		getDatosJson().then(items => {
			items.forEach(item => {
				item['imagen'] =
					'https://raw.githubusercontent.com/jorge751/' +
					`ViBeer/master/public/img/imagen${item.id}.png`
				delete item.id;
				getIdCategoriaByName(item.categoria)
					.then((id_categoria) => {
						item.id_categoria = id_categoria;
						creaItem(item);
					});
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
