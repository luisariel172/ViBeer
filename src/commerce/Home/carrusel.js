
//
//	Carrusel de bootstrap customizado
//

import React from 'react';
import { useEffect, useState } from 'react';

//	Carrusel de bootstrap
import Carousel from 'react-bootstrap/Carousel';
import ImagenCarrusel from './ImagenCarrusel';

function Carrusel() {

	const [items, setItems] = useState([]);
	useEffect(() => {
		const items = [];
		for (let i=1; i<=100; i++) {
			if (items.length > 10) break;
			const random = Math.floor(Math.random() * 40);
			if (!items.includes(random)) items.push(random);
		}
		setItems(items);
	}, []);

	return (
		<>
		<h2 className='my-5'>
			Nuestros productos más vendidos
		</h2>
		<Carousel className='w-75 mx-auto color-fondo-carrusel'>
			{items.map((item) => {
				return (
					<Carousel.Item key={item}>
						<ImagenCarrusel id={item} />
					</Carousel.Item>
				);
			})};
		</Carousel>
		</>
	);
}

export default Carrusel;
