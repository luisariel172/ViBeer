
//
//	Renderiza botón genérico para grabar item en formulario 
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { alertaToast } from '../../funciones';
import { hayErroresForm, itemWithForm } from './../funAdmin';
import { creaItem } from '../../api/db';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function BotonGrabarItem({
			itemForm, coleccion, linkExito
		}) {

	//	Valida parámetros
	if (!itemForm || !coleccion || !linkExito) return 'Falta info.';

	//	Navegador para ir a consulta
	const navegar = useNavigate();

	//	Ejecuta grabación
	const runGrabar = () => {

		//	Decide ejecución
		if (hayErroresForm(itemForm)) {
			alertaToast('Información faltante o errónea.');
		} else {
			creaItem(coleccion, itemWithForm(itemForm))
			.then((item) => {
				navegar(
					`${linkExito}/${item.id}`,
					{ state: { msjToast: 'Grabación exitosa !!!' } }
				);
			})
		};

	};

	//	Render !!!
	return (
		<Button size='md' className='w-25 me-5' onClick={runGrabar}>
			Grabar
		</Button>
	);

};
