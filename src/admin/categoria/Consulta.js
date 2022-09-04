
//
//	Renderiza consulta de categoría
//

//	Framework
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//	Acceso a DB
import { getDocument } from '../../api/db';

//	Formulario
import Formulario from './Formulario';

//	CSS
import '../index.css';

//	Default !!!
export default function Consulta() {

	//	Captura parámetro
	const { id } = useParams();

	//	Lee categoría
	const [itemDoc, setItemDoc] = useState({});
	useEffect(() => {
		const getItem = async () => {
			const ret = await getDocument('categorias', id);
			return ret || {};
		};
		getItem().then(itemDoc => setItemDoc(itemDoc))
	}, []);

	return (
		<div className='div-lista'>
			<div className='container'>
				<div className='my-5'>
					<h2>Consulta de categoría</h2>
				</div>
				<div className='row align-items-center justify-content-center'>
					<div className='col-8 p-5 border rounded'>
						<h5 className='text-white py-3 text-start'>
							Datos básicos
						</h5>
						<Formulario
							item={itemDoc}
							modo='consulta'
						/>
					</div>
				</div>
			</div>
		</div>
	);

};
