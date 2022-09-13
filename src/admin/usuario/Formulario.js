
//
//	Renderiza formulario de usuario
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { itemFormWithItem, getterForm, setterForm, childrenWithItemForm }
	from '../funAdmin';
import { GrupoForm } from '../../shared';
import { emailRegexp, isNull } from '../../funciones';

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
			case 'email':
				if (isNull(valor)) {
					msjErrores = 'Requerido.'
				} else if (!emailRegexp.test(valor)) {
					msjErrores = 'Inválido.';
				} else {
					msjErrores = '';
				};
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

			<GrupoForm
				etiqueta='Teléfono'
				campo='telefono'
				tamaño='5'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='E-mail'
				campo='email'
				tamaño='8'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='Dirección'
				campo='direccion'
				tamaño='8'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='Password'
				campo='passw'
				tipo='password'
				tamaño='5'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<div className='text-end py-4' >
				{BotonesForm}
			</div>

  		</Form>
	);

};
