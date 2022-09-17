
//
//	Renderiza item de galería
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';

//	Propio !!!
//	import { ImagenDesdeGithub } from '..';
import { isNull } from '../../funciones';
import WidgetCantidad from './WidgetCantidad';

//	Bootstrap !!!
import Card from 'react-bootstrap/Card';

//	CSS !!!
import './index.css'

//	Default !!!
export default function Item({
		id, nombre, precio, stock, categoria, imagen
	}) {

	//	Imagen
	//	const imagenGH = ImagenDesdeGithub(imagen);

	//	Render !!!
	return (
		<Card className='p-3 mb-5 rounded strong item-tarjeta sombra-item'>
			<div className='titulo-item'>
				<WidgetCantidad id={id}/>
				{nombre}
			</div>
			<Card.Img
				className='shadow-lg p-3 mb-2 bg-white rounded strong'
				variant='top'
				src={isNull(imagen) ? '/img/producto_sin_imagen.png' : imagen}
			/>
			<Card.Body>
				<Card.Text className='texto-item'>{'Precio: $' + precio}</Card.Text>
				<Card.Text className='texto-item'>{'Stock: '+ stock}</Card.Text>
				<Card.Text className='texto-item'>{'Categoría: '+ categoria}</Card.Text>
				<Link to={'/item_detalle/' + id}>
					<button className='btn btn-info'>
						Ver detalle
					</button>
				</Link>
			</Card.Body>
		</Card>
	);

};
