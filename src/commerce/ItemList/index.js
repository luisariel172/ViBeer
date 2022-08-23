
//
//	Renderiza cada item-componente del array de parámetro
//

import React from 'react';
import { Item } from "..";
import './index.css';

function ItemList({ itemList }) {
	return (
		<div className='div-item-list'>
			{itemList.map((objItem) => {
				objItem['imagen'] = '/img/imagen' + objItem.id + '.png';
				return <Item key={objItem.id} {...objItem} />;
			})};
		</div>
	);
}

export default ItemList;
