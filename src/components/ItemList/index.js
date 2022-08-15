
//
//	Renderiza cada item-componente del array de parámetro
//

import './index.css';
import { Item } from "../";

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
