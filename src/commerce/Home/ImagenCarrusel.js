
//
//	Rebderiza imagen de carrusel
//

//	Framework !!!
import React from 'react';

//	Default !!!
export default function ImagenCarrusel({ imagen })	{
	
	//	Render !!!
	return (
		<img
			className='d-block rounded mx-auto my-5'
			src={imagen}
			width='300px'
			alt='xxx'
		/>
	)
};
