
//
//	Renderiza item de galería
//

import './index.css'
import { Link } from 'react-router-dom';

//	Tarjeta bootstrap
import Card from 'react-bootstrap/Card';

function Item({ id, nombre, precio, stock, imagen, categoria }) {
	return (
		<Card id={id}
				className='shadow-lg p-3 mb-5 rounded strong item-tarjeta'>
			<div className='titulo-item'>{nombre}</div>
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
