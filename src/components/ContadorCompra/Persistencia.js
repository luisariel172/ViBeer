
//
//  Persistencia de contador de compra en local storage
//

import { useState } from 'react';

function Persistencia(valorParam) {

    //  Crea clave de local storage
    const clave = 'contador_compra';

    //  Crea contador y su setter
    const [contador, setContador] = useState(() => {
        const valor = localStorage.getItem(clave);
        return (valor ? Number(valor) : valorParam);
    });

    //  Crea acción de persistencia
    const set = (valor) => {
        setContador(valor);
        localStorage.setItem(clave, String(valor));
    };

    //  Devuelve contador y acción de persistencia
    return [contador, set];
}

export default Persistencia;
