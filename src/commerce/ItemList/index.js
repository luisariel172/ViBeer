
//
//	Renderiza cada item-componente del array de parámetro
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import { Item } from "..";

//	CSS !!!
import './index.css';

//	Default !!!
export default function ItemList({ itemList }) {

	//	Render !!!
	return (
		<div className='div-item-list'>
			{itemList && itemList.map((objItem) => {
				return <Item key={objItem.id} {...objItem} />;
			})};
		</div>
	);

};
