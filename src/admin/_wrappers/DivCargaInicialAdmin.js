
//
//	Wrapper genérico para carga inicial de items
//

//	Framework !!!
import React, { useEffect } from 'react';

//	Propio !!!
import { borrarColeccion, creaItem } from '../../api/db';
import { alertaToast } from '../../funciones';
import { getDatosJson } from '../funAdmin';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function DivCargaInicialAdmin({
		coleccion, children, titulo
	}) {

	//	Valida y resuleve parámetros
	if (!coleccion || !children) return 'Falta info.';
	titulo = titulo || `Carga de ${coleccion} iniciales.`;

	//	Borra colección
	borrarColeccion(coleccion);

	//	Items iniciales
	useEffect(() => {

		//	Carga colección desde datos JSON
		getDatosJson(coleccion)
		.then(items => {
			items.forEach(item => {
				delete item.id;
				creaItem(coleccion, item);
			})
			alertaToast('Carga inicial completada !!!', 'success');
		});

	}, []);

	//	Render !!!
	return (
		<div className='div-admin'>
			<div className='container'>
				<div className='row py-3'>
					<div className='col'>

						<h2>{titulo}</h2>

						<br />
					</div>
				</div>
				<div className='row mx-1'>

					{children}

				</div>
			</div>
		</div>
	);

};
