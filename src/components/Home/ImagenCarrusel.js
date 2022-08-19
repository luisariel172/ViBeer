
//
//	Rebderiza imagen de carrusel
//

//	Imágenes de Github
import { ImagenDesdeGithub } from '../';

function ImagenCarrusel({ id })	{
	
	//	Descarga imagen
	const imagen = ImagenDesdeGithub(id);
	
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

//		className='p-3 mb-5 rounded strong item-tarjeta'
