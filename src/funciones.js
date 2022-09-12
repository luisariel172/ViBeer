//
//  *****************************************************************
//
//                         F U N C I O N E S
//
//  *****************************************************************
//

//	Framework !!!
import { DateTime } from 'luxon';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


//	Confirma con Swal
export function confirmSwal(texto = 'Confirmar', titulo = '¿ Estás seguro ?') {
    return Swal.fire({
        title: titulo,
        html: texto,
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: 'No'})
};


//	Lanza alerta con Toast
export function alertaToast(
		mensaje = 'Mensaje !!!', tipo = 'error', tiempo= 2000) {

	toast[tipo](mensaje, {
		position: 'top-right',
		autoClose: tiempo,
		pauseOnHover: true
	})

};

//
//  Devuelve array con claves del objeto de parámetro.
//
export function getClaves(paramObj = {}) {
    return Object.keys(paramObj);
};


//
//  Devuelve string con primera letra en mayúscula.
//
export function capitalize(cadena = '') {
    cadena = String(cadena);
    return cadena[0].toUpperCase() + cadena.slice(1);
};


//
//  Devuelve true si es array con datos.
//
export function isArray(param, noVacio = false) {
    return Array.isArray(param) && (noVacio ? param.length !== 0 : true);
};


//
//  Muestra error en un alert().
//
export function alertError(texto, ret) {
    texto = String(texto);
    ret = (isNull(ret) ? null : ret);
    alert(texto);
    return ret;
};


//
//  Devuelve fecha en string con formato YYYY-MM-DD con LUXON !!!!!.
//
export function fechaAMD(fecha = DateTime.now()) {
    let mes = fecha.month;
    mes = (mes < 10 ? '0' + mes : mes);
    let dia = fecha.day;
    dia = (dia < 10 ? '0' + dia : dia);
    return  `${fecha.year}-${mes}-${dia}`;
};


//
//  Devuelve true si el parámetro es un objeto no nulo.
//
export function isObject(objecto) {
    return (typeof(objecto) === 'object' && objecto !== null);
};


//
//  Devuelve true si el parámtero es inútil.
//
export function isNull(value) {
    return (value === null ||
        value === undefined ||
            String(value).trim() === '' ||
                Number(value) === 0 ||
                    (Array.isArray(value) && value.length === 0))
};



export function delay(segundos = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, segundos * 1000);
    });
}
