
//
//	Renderiza formulario de consulta de categoría
//

//	Framework !!!
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

//	Propio !!!
import { alertaToast } from '../../funciones';
import lee from './lee';
import Formulario from './Formulario';
import DivFormAdmin from '../DivFormAdmin';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import '../index.css';

//	Botón aceptar
function BotonAceptar() {
	//	Render !!!
	return (
		<Link to='/admin_lista_categorias'>
			<Button size='md' className='w-25'>
				Aceptar
			</Button>
		</Link>
	);
};

//	Default !!!
export default function Consulta() {

	//	Captura parámetro id de URL
	const { id } = useParams();

	//	Captura parámetro de configuración
	const { state } = useLocation();
	useEffect(() => {
		//	Mensaje Toast de éxito !!!
		const { msjToast } = state || {};
		msjToast && alertaToast(msjToast, 'success');
	}, [])

	//	Lee categoría
	const [itemDoc, setItemDoc] = useState({});
	useEffect(() => {
		lee(id).then(itemDoc => setItemDoc(itemDoc))
	}, []);

	//	Render !!!
	return (
		<DivFormAdmin titulo='Consulta de categoría' subTitulo='Datos básicos'>
			<Formulario
				item={itemDoc}
				modo='consulta'
				Botonera={BotonAceptar}
			/>
		</DivFormAdmin>
	);

};
