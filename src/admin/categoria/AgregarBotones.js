
//
//	Renderiza botones para agregar categoría
//

//	Framework !!!
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { alertaToast } from '../../funciones';
import { hayErroresForm, itemWithForm } from '../funAdmin';
import { creaItem } from '../../api/db';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function AgregarBotones({ itemForm }) {

	//	Navegador para ir a consulta
	const navegar = useNavigate();

	//	Ejecuta grabación
	const runGrabar = () => {

		//	Decide ejecución
		if (hayErroresForm(itemForm)) {
			alertaToast('Información faltante o errónea.');
		} else {
			creaItem('categorias', itemWithForm(itemForm))
				.then((item) => {
					navegar('/admin_consulta_categoria/' + item.id,
						{ state: { msjToast: 'Grabación exitosa !!!' } }
					);
				})
		};
	};

	//	Render !!!
	return (
		<>
		<Button size='md' className='w-25 me-5' onClick={runGrabar}>
			Grabar
		</Button>
		<Link to='/admin_lista_categorias'>
			<Button size='md' className='w-25'>
				Cancelar
			</Button>
		</Link>
		</>
	);
};
