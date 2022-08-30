
//
//	Renderiza los detalles de un producto
//

import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetailCounter } from '..';

//	Acceso a base de datos
import { getDocument } from '../../api/db'

//	Tarjeta bootstrap
import Card from 'react-bootstrap/Card';
import './index.css'

//	Principal
function ItemDetailContainer() {

	//	Lee parámetro
	const { itemId } = useParams();

	//	Lee item
	const [item, setItem] = useState({});
	useEffect(() => {
		const getItem = async () => {
			const ret = await getDocument('productos', itemId);
			return ret || {};
		};
		getItem().then(item => setItem(item));
	}, []);

    return (
		<div className='row div-item-detail-container'>
			<Card
				id={item.id}
				className='col-4 card-item p-3 mx-5 my-5 rounded strong'
			>
				<div className='row'>
					<div className='col-4'>
						<Card.Title className='titulo'>{item.nombre}</Card.Title>
						<Card.Img
							className='shadow-lg p-3 mb-2 bg-white rounded strong'
							variant='top'
							src={item.imagen}
						/>
					</div>
					<div className='col-6 mt-5 m-5'>

						<Card.Body>
							<Card.Text>{'Precio: $' + item.precio}</Card.Text>
							<Card.Text>{'Stock: '+ item.stock}</Card.Text>
							<Card.Text>{'Categoría: '+ item.categoria}</Card.Text>
						</Card.Body>

						<ItemDetailCounter
							item={item}
							inicial={1}
						/>

					</div>
				</div>
			</Card>
		</div>
    );
}

export default ItemDetailContainer;
