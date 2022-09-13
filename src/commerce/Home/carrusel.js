
//
//	Carrusel de bootstrap customizado
//

//	Framework !!!
import React from 'react';
import { useEffect, useState } from 'react';

//	Propio !!!
import { getCollection } from '../../api/db';

//	Bootstrap !!!
import Carousel from 'react-bootstrap/Carousel';
import ImagenCarrusel from './ImagenCarrusel';

//	Default !!!
export default function Carrusel() {

	//	State de items
	const [items, setItems] = useState([]);
	useEffect(() => {
		getCollection('productos')
		.then((productos) => {
			const final = [];
			if (productos.length > 0) {
				for (let i=1; i<=100; i++) {
					if (final.length > 9) break;
					const random = Math.floor(Math.random() * 40);
					if (productos[random] &&
							!final.find(i => i.id === productos[random].id)) {
						final.push(productos[random]);
					}
				}
			};
			setItems(final);
		});
	}, []);

	//	Render !!!
	return (
		<>
		<h2 className='my-5'>
			Nuestros productos más vendidos
		</h2>
		<Carousel className='w-75 mx-auto color-fondo-carrusel'>
			{items.map((item) => {
				return (
					<Carousel.Item key={item.id}>
						<h5 className='text-white text-center'>
							{item.nombre}
						</h5>
						<ImagenCarrusel imagen={item.imagen} />
					</Carousel.Item>
				);
			})};
		</Carousel>
		</>
	);
};
