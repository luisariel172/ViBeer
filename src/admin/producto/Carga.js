
//
//	Carga productos iniciales
//

//	Framework !!!
import React, { useEffect } from 'react';

//	Propio !!!
import { creaItem, borrarColeccion, getCollectionWithQuery } from '../../api/db';
import { getDatosJson } from '../funAdmin';
import ListaTabla from './ListaTabla';

//	Default !!!
export default function Carga() {

	//	Nombre de colección
	const coleccion = 'productos';

	//	Borra colección
	borrarColeccion(coleccion);

	//	Items iniciales
	useEffect(() => {

		//	Colección
		const coleccion = 'productos';

		//	Devuelve el id de una categoría con nombre
		const getIdCategoriaByName = async (nombre) => {
			const ret = await getCollectionWithQuery(
				'categorias', ['nombre', '==', nombre]);
			return ret[0] ? ret[0].id : '';
		}

		//	Carga datos JSON desde ./public
		getDatosJson(coleccion).then(items => {
			items.forEach(item => {

				item.imagen = `/img/imagen${item.id}.png`;

				//item.imagen =
				//	'https://raw.githubusercontent.com/jorge751/' +
				//	`ViBeer/master/public/img/imagen${item.id}.png`

				delete item.id;
				getIdCategoriaByName(item.categoria)
					.then((id_categoria) => {
						item.id_categoria = id_categoria;
						creaItem(coleccion, item);
					});
			});
		});

	}, []);

	//	Render !!!
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
	);

};
