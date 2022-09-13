
//
//	Renderiza formulario de orden
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { itemFormWithItem, getterForm, setterForm, childrenWithItemForm }
	from '../funAdmin';
import { GrupoForm } from '../../shared';
import { emailRegexp, isNull } from '../../funciones';
import FormularioTabla from './FormularioTabla';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';

//	Validador de campo del formulario
//	Devuelve {error: Boolean, msjErrores: String}
export const validator = (campo, valor) => {
	let msjErrores;
	switch (campo) {
		case 'fecha':
			msjErrores = (isNull(valor) ? 'Requerido.' : '');
			break
		case 'usuario':
			msjErrores = (isNull(valor) ? 'Requerido.' : '');
			break
		case 'telefono':
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
		case 'direccion':
			msjErrores = (isNull(valor) ? 'Requerido.' : '');
			break
		default:
			msjErrores = '';
	};
	return {error: !isNull(msjErrores), msjErrores: msjErrores};
};

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
				etiqueta='Fecha'
				campo='fecha'
				tamaño='4'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
				setFoco={true}
			/>

			<GrupoForm
				etiqueta='Id usuario'
				campo='id_usuario'
				tamaño='5'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={'consulta'}
			/>

			<GrupoForm
				etiqueta='Usuario'
				campo='usuario'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='Teléfono'
				campo='telefono'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='E-mail'
				campo='email'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='Dirección'
				campo='direccion'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<div className='my-3'>
				<h5>Items</h5>
			</div>

			<FormularioTabla
				itemForm={itemForm}
			 />

			<div className='text-end py-4' >
				{BotonesForm}
			</div>

  		</Form>
	);

};
