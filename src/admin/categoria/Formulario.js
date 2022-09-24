
//
//	Renderiza formulario de categoría
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { itemFormWithItem, getterForm, setterForm, childrenWithItemForm }
	from '../funAdmin';
import { GrupoForm } from '../../shared';
import { isNull } from '../../funciones';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';

//	Default !!!
export default function Formulario({
		item, modo, children
	}) {

	//	Item del formulario
	const [itemForm, setItemForm] = useState({});
	useEffect(() => {
		const inicial = itemFormWithItem(item, validator);
		setItemForm(inicial);
	}, [item])

	//	Botones del formulario
	const [BotonesForm, setBotonesForm] = useState();
	useEffect(() => {
    	const botones = childrenWithItemForm(children, itemForm);
		setBotonesForm(botones);
	}, [itemForm])

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
		<Form className='text-white px-2' autoComplete='off'>

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
				{BotonesForm}
			</div>

  		</Form>
	);

};
