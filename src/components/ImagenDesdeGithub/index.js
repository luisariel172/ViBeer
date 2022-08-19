
//
//	Devuelve URL de imagen de producto de repositorio de Github
//

import { useEffect, useState } from 'react';

const ImagenDesdeGithub = (id) => {

	//	Descarga imagen desde github
	const [imagen, setImagen] = useState();
	useEffect(() => {
		const getImagen = async (id) => {
			const url = `https://raw.githubusercontent.com/jorge751/ViBeer/master/public/img/imagen${id}.png`
			const respuesta = await fetch(url);
			const imagenBlob = await respuesta.blob();
			return URL.createObjectURL(imagenBlob);
		};
		getImagen(id).then((imagen) => setImagen(imagen));
	}, [])

	return imagen;
}

export default ImagenDesdeGithub;
