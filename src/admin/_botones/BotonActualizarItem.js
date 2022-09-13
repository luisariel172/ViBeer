
//
//	Renderiza botón genérico para actualizar item en formulario
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { alertaToast } from '../../funciones';
import { hayErroresForm, itemWithForm } from '../funAdmin';
import { actualizaItem } from '../../api/db';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function BotonActualizarItem({
			itemForm, coleccion, linkExito
		}) {

	//	Valida parámetros
	if (!itemForm || !coleccion || !linkExito) return 'Falta info.';

	//	Navegador para ir a consulta
	const navegar = useNavigate();

	//	Ejecuta actualización
	const runActualizar = () => {

		//	Decide ejecución
		if (hayErroresForm(itemForm)) {
			alertaToast('Información faltante o errónea.');
		} else {
			actualizaItem(coleccion, itemForm.id.valor, itemWithForm(itemForm))
			.then(() => {
				navegar(
					`${linkExito}/${itemForm.id.valor}`,
					{ state: { msjToast: 'Actualización exitosa !!!' } }
				);
			})
		};

	};

	//	Render !!!
	return (
		<Button size='md' className='w-25 me-5' onClick={runActualizar}>
			Actualizar
		</Button>
	);

};
