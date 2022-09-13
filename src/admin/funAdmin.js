
//
//*****************************************************************
//
//				Funciones comunes de administración
//
//*****************************************************************
//

//	Framework !!!
import React from 'react';

//	Propio !!!
import { isNull } from "../funciones";


//	Carga colección de datos desde JSON de ./public
export async function getDatosJson(coleccion) {
	const respuesta = await fetch(`/datos.json`)
	const objJson = await respuesta.json();
	let ret = objJson[coleccion];
	return ret;
};


//	Devuelve componentes hijos con agrgegado de objeto-form
export function childrenWithItemForm(hijos, itemForm) {
	return React.Children.map(hijos, (hijo) => {
		return React.cloneElement(
			hijo, {itemForm: itemForm}
		);
	});
};

//	Devuelve objeto para formulario
//	Construye con item de dato y valida
//	Construye objeto para cada campo: "campo": {"valor", "errores"}
export function itemFormWithItem(item, funValidator) {

	//	Valida parámetros
	if (!item) return {};

	const ret = {};
	for (const campo in item) {

		//	Valida cada campo
		const { msjErrores } =
			funValidator 
				? funValidator(campo, item[campo])
				: '';

		//	Construye objeto para cada campo
		ret[campo] = {
			valor: item[campo],
			errores: msjErrores
		};

	};

	return ret;
}


//	Lector genérico de campo para formulario
export function getterForm(itemForm, campo) {
	return itemForm[campo] ? itemForm[campo].valor : '';
};


//	Escritor genérico de campo para formulario
export function setterForm(
		funUseSetter, itemForm, campo, valor, funValidator) {

	//	Valida parámetros
	if (!funUseSetter || !itemForm || !campo) return false;

	//	Valida campo
	const { msjErrores } =
		funValidator
			? funValidator(campo, valor) 
			: '';

	//	Actualiza itemForm
	const nuevoItemForm = {...itemForm,
		[campo]: {
			valor: valor,
			errores: msjErrores
		}
	};
	funUseSetter(nuevoItemForm);

	return true;
};


//	Devuelve true si hay errores en campos de formulario
export function hayErroresForm(itemForm) {

	//	Valida parámetro
	if (isNull(itemForm)) {
		alert('hayErroresForm: Falta info.');
		return true;
	}

	let ret = false;
	for (let campo in itemForm) {
		ret = ret || !isNull(itemForm[campo].errores);
	};

	return ret;
};


//	Construye y devuelve item para grabación con campos de formulario
export function itemWithForm(itemForm) {

	//	Valida parámetro
	if (!itemForm) return {};

	const ret = {};
	for (let campo in itemForm) {
		ret[campo] = itemForm[campo].valor;
	};
	delete ret.id;

	return ret;
};
