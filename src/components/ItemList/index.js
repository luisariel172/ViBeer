
//
//	Renderiza cada item-componente del array de parámetro
//

import './index.css';
import { Item } from "../index.js";

function ItemList({ itemList }) {
	return (
		<div className='div-item-list'>
			{itemList.map((objItem) => {
				objItem['key'] = objItem.id;
				objItem['imagen'] = './img/imagen' + objItem.id + '.png';
				return <Item {...objItem} />;
			})};
		</div>
	);
}

export default ItemList;
