
//
//	Renderiza lista de categorías con tabla
//

//	Framework !!!
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

//	Propio !!!
import { getCollection } from '../../api/db';
import ListaTabla from './ListaTabla';

//	CSS
import '../index.css';
import BotonCargaInicial from '../BotonCargaInicial';
import BotonAgregarItem from '../BotonAgregarItem';

//	Default !!!
export default function Lista() {

	//	Nombre de colección
	const coleccion = 'categorias';

	//	Lee items
	const [items, setItems] = useState([]);
	useEffect(() => {
		async function getItems() {
			await getCollection(coleccion)
				.then(items => setItems(items));
		}
		getItems();
	}, []);

	//	Render !!!
	return (
		<div className='div-admin'>
			<ToastContainer />
			<div className='container'>

				<div className='row py-3 justify-content-between'>

					<div className='col-4'>
						<h2>Categorías</h2>
						<br />
					</div>

					<div className='col d-flex justify-content-end'>

						<BotonAgregarItem
							singularCol='categoria'
							caption={'Agregar categoría'}
						/>

						<BotonCargaInicial
							nombreCol={coleccion}
						/>

					</div>

				</div>

				<div className='row mx-1'>
					<ListaTabla items={items} />
				</div>

			</div>
		</div>
	)

};
