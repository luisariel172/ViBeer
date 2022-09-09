
//
//	Carga categorías iniciales
//

//	Framework !!!
import React, { useEffect } from 'react';

//	Propio !!!
import { borrarColeccion, creaItem } from '../../api/db';
import ListaTabla from './ListaTabla';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function Carga() {

	//	Nombre de colección
	const coleccion = 'categorias';

	//	Borra colección
	borrarColeccion(coleccion);

	//	Items iniciales
	useEffect(() => {

		//	Carga datos JSON desde ./public
		const getDatosJson = async () => {
			const respuesta = await fetch(`/datos.json`)
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
		<div className='div-admin'>
			<div className='container'>

				<div className='row py-3'>
					<div className='col'>
						<h2>Carga de {coleccion} iniciales</h2>
						<br />
					</div>
				</div>

				<div className='row mx-1'>
					<ListaTabla />
				</div>

			</div>
		</div>
	)

};
