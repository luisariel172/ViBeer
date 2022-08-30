
//
//	Renderiza cada item-componente del array de parámetro
//

import React from 'react';

//	Item
import { Item } from "..";

import './index.css';

function ItemList({ itemList }) {
	return (
		<div className='div-item-list'>
			{itemList.map((objItem) => {
				return <Item key={objItem.id} {...objItem} />;
			})};
		</div>
	);
}

export default ItemList;
