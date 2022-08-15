
//
//	Devuelve función proveedora customizada de Context de carrito de compra
//

//	Importa desde react
import React, { useContext, useState } from "react";

//  Importa acceso a persistencia
import Persistencia from './Persistencia';

//  Crea objeto-contexto
const objContextCarrito = React.createContext([]);

//  Crea función de acceso a contexto
export const useContextCarrito = () => useContext(objContextCarrito);

function Proveedor({ children }) {

	//	Líneas del carrito y su setter
	const [lineasCarrito, setLineasCarrito] = Persistencia();

	//	Devuelve true si el id de item ya existe en líneas
	const yaExiste = (id) =>
		lineasCarrito.find((linea) => linea.id === id) ? true : false;

	//	Agregar línea, acumula si ya existe el item
	const agregarLinea = (item, cantidad) => {
		if ( yaExiste(item.id) ) {
			setLineasCarrito(
				lineasCarrito.map((linea) => {
					return (
						linea.id === item.id
							? {...linea, cantidad: (linea.cantidad + cantidad)}
							: linea
					);
				})
			)
		} else {
			setLineasCarrito([...lineasCarrito, {...item, cantidad: cantidad}]);
		};
	};

	//	Borra línea con id de item
	const borrarLinea = (id) => {
		setLineasCarrito(lineasCarrito.filter(linea => linea.id !== id))
	};

	//	Acción reset
	const reset = () => setLineasCarrito([]);

	return (
        <objContextCarrito.Provider 
            value={{
				lineasCarrito,
				agregarLinea,
				borrarLinea,
                reset
            }}
        >
			{children}
		</objContextCarrito.Provider>
	);
}

export default Proveedor;
