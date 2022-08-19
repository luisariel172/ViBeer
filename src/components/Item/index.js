
//
//	Renderiza item de galería
//

import './index.css'
import { Link } from 'react-router-dom';

//	Imagen
import { ImagenDesdeGithub } from '../';

//	Tarjeta bootstrap
import Card from 'react-bootstrap/Card';

//	Widget de catidad en carrito
import WidgetCantidad from './WidgetCantidad';

function Item({ id, nombre, precio, stock, categoria }) {

	const imagen = ImagenDesdeGithub(id);

	return (
		<Card className='shadow-lg p-3 mb-5 rounded strong item-tarjeta'>
			<div className='titulo-item'>
				<WidgetCantidad id={id}/>
				{nombre}
			</div>
			<Card.Img
				className='shadow-lg p-3 mb-2 bg-white rounded strong'
				variant='top'
				src={imagen}
			/>
			<Card.Body>
				<Card.Text className='texto-item'>{'Precio: $' + precio}</Card.Text>
				<Card.Text className='texto-item'>{'Stock: '+ stock}</Card.Text>
				<Card.Text className='texto-item'>{'Categoría: '+ categoria}</Card.Text>
				<Link to={'/item/' + id}>
					<button className='btn btn-info'>
						Ver detalle
					</button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default Item;
