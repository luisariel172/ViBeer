
//
//	Lee array de items y lanza el Componente-listador
//

import React from 'react';
import { getCollection, getCollectionWithQuery } from '../../api/db'

import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { ItemList } from "../index";

import './index.css'

//	Principal
function ItemListContainer() {

	//	Captura parámetro categoría
	const { categoria } = useParams();

	//	Productos
	const [items, setItems] = useState([]);
	useEffect(() => {

		//	Carga datos desde Firestore
		const getDatosFirestore = async () => {

			let ret;

			//	Filtro por categoría
			if (categoria) {
				ret = await getCollectionWithQuery(
					'productos', ['categoria', '==', categoria]);
			} else {
				ret = await getCollection('productos');
			}
			//ret = ret.filter((e) => e.categoria === categoria);

			return ret;
		};
		getDatosFirestore().then(items => setItems(items));

	}, []);

    return (
		<div className='div-item-list-container'>
			<div className='container'>
				<h2>
					{categoria ? categoria : 'Todas'}
				</h2>
			</div>
			<ItemList itemList={items} />
		</div>
    );
}

export default ItemListContainer;
