
//
//	Devuelve URL de imagen de producto de repositorio de Github
//

//	Framework !!!
import { useState, useEffect } from 'react';

//	Default !!!
export default function ImagenDesdeGithub(url) {

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

	//	Render !!!
	return imagen;

};
