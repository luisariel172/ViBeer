
//
//	Lee items de la base y lanza el Componente-listador
//

//	Framework !!!
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//	Propio !!!
import { getCollection, getCollectionWithQuery } from '../../api/db'
import { ItemList } from "../index";

//	CSSS !!!
import './index.css'

//	Default !!!
export default function ItemListContainer() {

	//	Captura parámetro categoría
	const { id_categoria } = useParams();

	//	Productos y nombre de categoría
	const [items, setItems] = useState([]);
	const [categoria, setCategoria] = useState('');
	useEffect(() => {

		//	Lee items
		const getItems = async () => {
			let ret = [];
			//	Filtro por categoría
			if (id_categoria) {
				ret = await getCollectionWithQuery(
					'productos', ['id_categoria', '==', id_categoria]);
				if (ret[0]) {
					setCategoria(ret[0].categoria);
				} else {
					setCategoria([]);
				};
			} else {
				ret = await getCollection('productos');
				setCategoria('Todas');
			}
			return ret;
		};
		getItems().then(items => setItems(items));

	}, []);

    //	Render !!!
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

};
