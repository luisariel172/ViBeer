
//
//  Persistencia de sesión en session storage
//

//  Framework !!!
import { useState } from 'react';

//  Propio !!!
import { isNull } from '../../funciones';

//  Default !!!
export default function persistencia() {

    //  Crea clave y valor inicial de local storage
    const clave = 'sesion';
    const inicial = {email: '', usuario: '', passw: '', id_usuario: ''};

    //  Crea sesión y su setter
    const [sesion, setSesion] = useState(() => {
        const store = window.sessionStorage.getItem(clave);
        return (
            !isNull(store)
            ? JSON.parse(store)
            : inicial
        );
    });

    //  Función setter para devolver en Return
    const setter = (sesion) => {
        window.sessionStorage.setItem(clave, JSON.stringify(sesion));
        setSesion(sesion);
    };

    //  Función deleter para devolver en Return
    const deleter = () => {
        window.sessionStorage.removeItem(clave);
        setSesion(inicial);
    };

    //  Devuelve sesión, setter y delete
    return [sesion, setter, deleter];

};
