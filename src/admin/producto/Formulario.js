
//
//	Renderiza formulario de producto
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import { getCollection } from '../../api/db';
import { GrupoForm } from '../../shared';
import { isNull } from '../../funciones';
import { itemFormWithItem, getterForm, setterForm, childrenWithItemForm }
	from '../funAdmin';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';

//	Default !!!
export default function Formulario({
		item, modo, children
	}) {

	//	Array de categorías con nombre y id para resolver id_categoria
	const [arrCategorias, setArrCategorias] = useState([]);
	useEffect(() => {
		async function getItems() {
			await getCollection('categorias')
			.then(items => items.map(item => {
				return {nombre: item.nombre, id: item.id}
			}))
			.then(items => setArrCategorias(items));
		}
		getItems()
	}, []);

	//	Item-objeto del formulario
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
		//	Resuleve id de categoría
		if (campo === 'categoria') {
			const cat = arrCategorias.find((cat) => {
				return cat.nombre === valor
			});
			if (cat) {
				itemForm.id_categoria.valor = cat.id;
				itemForm.id_categoria.errores = '';
			} else {
				itemForm.id_categoria.valor = '';
			};
		}
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
			case 'precio':
				msjErrores = (isNull(valor) ? 'Requerido.' : '');
				break
			case 'id_categoria':
				msjErrores = (isNull(valor) ? 'Requerido.' : '');
				break
			case 'categoria':
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

			<GrupoForm
				etiqueta='Precio'
				campo='precio'
				tipo='number'
				tamaño='2'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='Stock'
				campo='stock'
				tipo='number'
				tamaño='2'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='Id categoría'
				campo='id_categoria'
				tamaño='5'
				funGetter={getter}
				funValid={validator}
				modo='consulta'
			/>

			<GrupoForm
				etiqueta='Categoría'
				campo='categoria'
				tamaño='8'
				tipo='select'
				seleccion={{coleccion: 'categorias', campo: 'nombre'}}
				clasesControl='background-seleccion'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo={modo}
			/>

			<GrupoForm
				etiqueta='URL imagen'
				campo='imagen'
				tamaño='9'
				funGetter={getter}
				funSetter={setter}
				funValid={validator}
				modo='consulta'
			/>

			<div className='text-end py-4' >
				{BotonesForm}
			</div>

  		</Form>
	);

};
