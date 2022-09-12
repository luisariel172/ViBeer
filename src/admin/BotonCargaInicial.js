
//
//	Renderiza botón genérico de carga inicial en lista de items
//

//	Framework !!!
import React from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import { confirmSwal } from '../funciones';

//	CSS !!!
import './index.css';

//	Default !!!
export default function BotonCargaInicial({ nombreCol }) {

	//	Valida parámetros
	if (!nombreCol) return 'BtnLoad: Falta info.';

	//	Navegador para ir a carga inicial
	const navegar = useNavigate();

	//	Ejecuta botón
	const runBoton = () => {

		//	Confirma
		confirmSwal(
			`Esto borrará TODOS los datos de ${nombreCol}.<br/>` +
			'¿ Está seguro  ?', 'Carga de datos iniciales')
		.then((resultado) => {
			if (resultado.isConfirmed) {
				navegar(`/admin_carga_${nombreCol}`);
			}
		});

	};

	//	Render !!!
	return (
		<div className='ms-5'>
			<button className='btn' onClick={runBoton}>
				Cargar datos iniciales
			</button>
		</div>
	);

};
