
//
//	Lee items de la base y lanza el Componente-listador
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
	const { id_categoria } = useParams();

	//	Productos y nombre de categoría
	const [items, setItems] = useState([]);
	const [categoria, setCategoria] = useState('');
	useEffect(() => {

		//	Lee items
		const getItems = async () => {
			let ret;
			//	Filtro por categoría
			if (id_categoria) {
				ret = await getCollectionWithQuery(
					'productos', ['id_categoria', '==', id_categoria]);
				setCategoria(ret[0].categoria);
			} else {
				ret = await getCollection('productos');
				setCategoria('Todas');
			}
			return ret;
		};
		getItems().then(items => setItems(items));

	}, []);

    return (
		<div className='div-item-list-container'>
			<div className='container'>
				<h2>
					{categoria}
				</h2>
			</div>
			<ItemList itemList={items} />
		</div>
    );
}

export default ItemListContainer;
