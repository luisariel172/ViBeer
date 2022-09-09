
//*****************************************************************
//
//				Funciones comunes de administración
//
//*****************************************************************

//	Propio !!!
import { isNull } from "../funciones";


//	Construye con "item", valida y devuelve objeto para formulario
//	Estructura para cada campo: "campo": {"valor", "errores"}
export function objFormWithItem(item, funValidator) {

	//	Valida parámetros
	if (!item) return {};

	const ret = {};
	for (const campo in item) {

		//	Valida cada campo
		const { msjErrores } =
			funValidator 
				? funValidator(campo, item[campo])
				: '';

		//	Asigna objeto a cada campo
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
export function setterForm(funUseSetter, itemForm, campo, valor, funValidator) {

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
	if (!itemForm) return {};

	let ret = false;
	for (let campo in itemForm) {
		ret = ret || !isNull(itemForm[campo].errores);
	};

	return ret;
};


//	Devuelve item para grabación con campos de formulario
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
