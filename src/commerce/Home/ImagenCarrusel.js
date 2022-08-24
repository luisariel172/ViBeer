
//
//	Rebderiza imagen de carrusel
//

import React from 'react';

function ImagenCarrusel({ imagen })	{
	
	return (
		<img
			className='d-block rounded mx-auto my-5'
			src={imagen}
			width='300px'
			alt='xxx'
		/>
	)
};

export default ImagenCarrusel;
