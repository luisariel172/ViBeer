
//
//	Renderiza formulario de compra
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { itemFormWithItem, getterForm, setterForm }
	from '../../admin/funAdmin';
import { GrupoForm } from '../../shared';
import { validator } from '../../admin/orden/Formulario';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';

//	Default !!!
export default function CompraForm({
		item, funEjecutar
	}) {

	//	Item del formulario
	const [itemForm, setItemForm] = useState({});
	useEffect(() => {
		const inicial = itemFormWithItem(item, validator);
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

	//	Run botón !!
	function runBoton(evt) {
		evt.preventDefault();
		funEjecutar(itemForm);
	};

	//	Render !!!
	return (
		<Form className='text-white' autoComplete='off'>

			<GrupoForm
				etiqueta='Fecha'
				campo='fecha'
				tamaño='4'
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
				setFoco={true}
			/>

			<GrupoForm
				etiqueta='Teléfono'
				campo='telefono'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
			/>

			<GrupoForm
				etiqueta='E-mail'
				campo='email'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
			/>

			<GrupoForm
				etiqueta='Dirección'
				campo='direccion'
				tamaño='7'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
			/>

			<div className='text-end'>
				<button
					className='btn mt-4'
					onClick={runBoton}
				>
					Comprar
				</button>
			</div>

  		</Form>
	);

};
