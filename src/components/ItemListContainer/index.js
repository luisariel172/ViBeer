
//
//	Lee array de items y lanza el Componente-listador
//

import './index.css'
import { useState, useEffect} from 'react';
import { ItemList } from "../index";

//	Principal
function ItemListContainer({ categoria }) {

	//	Productos
	const [items, setItems] = useState([]);
	useEffect(() => {

		//	Carga datos JSON en ./public
		const getDatosJson = async () => {
			const respuesta = await fetch(`/datos.json`,)
			const objJson = await respuesta.json();
			let ret = objJson.productos;

			//	Filtro por categoria
			if (categoria) {
				ret = ret.filter((e) => e.categoria === categoria);
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
			<ItemList itemList={items} />
		</div>
    );
}

export default ItemListContainer;
