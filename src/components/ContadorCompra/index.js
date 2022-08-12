
//
//  Context de contador de compra
//

import React, { useContext } from 'react';

//  Importa función de acceso a persistencia
import Persistencia from './Persistencia';

//  Crea objeto-contexto
const ContCompraContext = React.createContext();

//  Crea función de acceso a contexto
export const useContCompraContext = () => useContext(ContCompraContext);

function ContadorCompra({ children }) {

    //  Crea contador y su setter persistidor
    const [contador, setContador] = Persistencia(0);

    //  Crea acción reset
    const reset = () => setContador(0);

    //  Crea acción suma
    const sumar = (valor) => setContador(contador + valor);

    //  Crea acción resta
    const restar = () => {if (contador > 0) setContador(contador - 1)};

    //  Devuelve función proveedora,
	//		expone contador y acciones,
	//		y anida children de parámetro
    return (
        <ContCompraContext.Provider 
            value={{
				contador,
                reset,
                sumar,
                restar
            }}
        >
			{children}
		</ContCompraContext.Provider>
    );
};

export default ContadorCompra;
