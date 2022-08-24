
//
//	Devuelve URL de imagen de producto de repositorio de Github
//

import { useState, useEffect } from 'react';

const ImagenDesdeGithub = (url) => {

	//	Descarga imagen desde github
	const [imagen, setImagen] = useState();
	useEffect(() => {
		const getImagen = async () => {
			const respuesta = await fetch(url);
			const imagenBlob = await respuesta.blob();
			return URL.createObjectURL(imagenBlob);
		};
		getImagen().then((imagen) => setImagen(imagen));
	}, [])

	return imagen;
}

export default ImagenDesdeGithub;
