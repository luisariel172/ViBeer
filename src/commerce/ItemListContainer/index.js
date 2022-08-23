
//
//	Lee array de items y lanza el Componente-listador
//

import React from 'react';

import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { ItemList } from "../index";

import './index.css'

//	Principal
function ItemListContainer() {

	//	Captura parámetro categoría
	const { categoriaId } = useParams();

	//	Productos
	const [items, setItems] = useState([]);
	useEffect(() => {

		//	Carga datos JSON en ./public
		const getDatosJson = async () => {
			const respuesta = await fetch(`/datos.json`,)
			const objJson = await respuesta.json();
			let ret = objJson.productos;

			//	Filtro por categoría
			if (categoriaId) {
				ret = ret.filter((e) => e.categoria === categoriaId);
			}

			return ret;
		};

		getDatosJson()
			.then((items) => {
				setItems(items);
			})

	}, []);

    return (
		<div className='div-item-list-container'>
			<div className='container'>
				<h2>
					{categoriaId ? categoriaId : 'Todas'}
				</h2>
			</div>
			<ItemList itemList={items} />
		</div>
    );
}

export default ItemListContainer;
