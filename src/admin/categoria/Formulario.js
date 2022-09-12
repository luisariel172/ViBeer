
//
//	Renderiza formulario de categoría
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { objFormWithItem, getterForm, setterForm } from '../funAdmin';
import { GrupoForm } from '../../shared';
import { isNull } from '../../funciones';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function Formulario({ item = {}, modo = '', Botonera }) {

	//	State de item de formulario
	const [itemForm, setItemForm] = useState({});
	useEffect(() => {
		const inicial = objFormWithItem(item, validator);
		setItemForm(inicial);
	}, [item])

	//	Lector de campo
	const getter = (campo) => {
		return getterForm(itemForm, campo);
	};

	//	Escritor de campo
	const setter = (campo, valor) => {
		setterForm(setItemForm, itemForm, campo, valor, validator);
	};

	//	Validador de campo del formulario
	//	Devuelve {error: Boolean, msjErrores: String}
	const validator = (campo, valor) => {
		let msjErrores;
		switch (campo) {
			case 'nombre':
				msjErrores = (isNull(valor) ? 'Requerido.' : '');
				break
			default:
				msjErrores = '';
		};
		return {error: !isNull(msjErrores), msjErrores: msjErrores};
	};

	//	Render !!!
	return (
		<Form className='text-white' autoComplete='off'>

			<GrupoForm
				etiqueta='Id'
				campo='id'
				tamaño='5'
				funGetter={getter}
				funValid={validator}
			/>
			
			<GrupoForm
				etiqueta='Nombre'
				campo='nombre'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
				setFoco={true}
			/>

			<div className='text-end py-4' >
				<Botonera itemForm={itemForm}/>
			</div>

  		</Form>
	);

};
