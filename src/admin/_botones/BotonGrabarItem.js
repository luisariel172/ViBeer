
//
//	Renderiza botón genérico para grabar item en formulario 
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { isNull, alertaToast } from '../../funciones';
import { hayErroresForm, itemWithForm } from './../funAdmin';
import { creaItem } from '../../api/db';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function BotonGrabarItem({
		itemForm, coleccion, linkExito,
		texto = 'Grabar',
		msjExito = 'Grabación exitosa !!!'
	}) {

	//	Navegador para ir a consulta
	const navegar = useNavigate();

	//	Valida parámetros
	if (isNull(itemForm) || isNull(coleccion) || isNull(linkExito))
		return 'Falta info.';

	//	Ejecuta grabación
	const runGrabar = (evt) => {
		evt.preventDefault();

		//	Decide ejecución
		if (hayErroresForm(itemForm)) {
			alertaToast('Información faltante o errónea.');
		} else {
			creaItem(coleccion, itemWithForm(itemForm))
			.then((item) => {
				navegar(
					`${linkExito}/${item.id}`,
					{ state: { msjToast: msjExito } }
				);
			})
		};

	};

	//	Render !!!
	return (
		<Button
			type='submit'
			size='md'
			className='w-25 me-5'
			onClick={runGrabar}
		>
			{texto}
		</Button>
	);

};
