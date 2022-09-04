
//
//	Renderiza formulario de categoría
//

//	Framework
import React from 'react';
import { Link } from 'react-router-dom';

//	Grupo de etiqueta-y-campo
import { GrupoForm } from '../../shared';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//	CSS
import '../index.css';

//	Default !!!
export default function Formulario({ item, modo }) {

	//	Lector genéroico
	const getter = (campo) => {
		return item[campo];
	}

	return (
		<Form className='text-white'>

			<GrupoForm
				etiqueta='Id'
				campo='id'
				tamaño='5'
				funGetter={getter}
				modo={modo}
			/>
			
			<GrupoForm
				etiqueta='Nombre'
				campo='nombre'
				tamaño='7'
				funGetter={getter}
				modo={modo}
			/>

			<div className='text-end py-4' >
				<Link to='/admin_lista_categorias'>
					<Button size='md' className='w-25'>
						Aceptar
					</Button>
				</Link>
			</div>

  		</Form>
	);

};
