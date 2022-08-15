
//
//  Persistencia de líneas de context de carrito en local storage
//

import { useState } from 'react';

function Persistencia() {

    //  Crea clave de local storage
    const clave = 'lineas_carrito';

    //  Crea array de líneas y su setter
    const [lineas, setLineas] = useState(() => {
        const lineas = localStorage.getItem(clave);
        return (lineas ? JSON.parse(lineas) : []);
    });

    //  Crea acción de persistencia
    const set = (lineas) => {
        setLineas(lineas);
        localStorage.setItem(clave, JSON.stringify(lineas));
    };

    //  Devuelve lineas y acción de persistencia
    return [lineas, set];
}

export default Persistencia;
