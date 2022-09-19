
//
//	Lee items de la base y lanza el Componente-listador
//

//	Framework !!!
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//	Propio !!!
import { getCollection, getCollectionWithQuery, getCollectionWithContent }
	from '../../api/db'
import { isNull } from '../../funciones';
import { ItemList } from "../index";

//	CSSS !!!
import './index.css'

//	Default !!!
export default function ItemListContainer() {

	//	Captura parámetro categoría
	const { id_categoria, buscar } = useParams();

	//	Productos y título de galería
	const [items, setItems] = useState([]);
	const [titulo, setTitulo] = useState('');
	useEffect(() => {

		//	Lee items por categoría, con cadena de búsqueda o todas
		const getItems = async () => {
			let items = [];
			if (id_categoria) {
				items = await getCollectionWithQuery(
					'productos', ['id_categoria', '==', id_categoria]);
			} else if (buscar) {
				items = await getCollectionWithContent('productos', buscar);
			} else {
				items = await getCollection('productos');
			};
			return items;
		};
		getItems().then(items => {
			setItems(items);
			let titulo = 'Todas';
			if (id_categoria) {
				titulo = isNull(items[0]) ? 'No hay categoría.' : items[0].categoria;
			} else if (buscar) {
				titulo = `${isNull(items[0]) ? 'No hay c' : 'C'}ervezas "${buscar}".`;
			};
			setTitulo(titulo);
		});

	}, [id_categoria, buscar]);

    //	Render !!!
	return (
		<div className='div-item-list-container'>
			<div className='container'>
				<div className='row'>
					<h2>
						{titulo}
					</h2>
				</div>
				<div className='row'>
					<ItemList itemList={items} />
				</div>
			</div>
		</div>
    );
};
