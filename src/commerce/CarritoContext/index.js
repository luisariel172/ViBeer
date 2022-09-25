
//
//	Devuelve función proveedora customizada de Context de carrito de compra
//

//	Framework !!!
import React, { useContext } from 'react';

//  Propio !!!
import persistencia from './persistencia';

//  Crea objeto-contexto
const objCarritoContext = React.createContext([]);

//  Crea función de acceso a contexto
export const useCarritoContext = () => useContext(objCarritoContext);

//	Default !!!
export default function Proveedor({ children }) {

	//	Líneas del carrito y su setter
	const [lineasCarrito, setLineasCarrito] = persistencia();

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

	//	Devuelve la cantidad de artículos de un id
	const getCantidadById = (id) => {
		const linea = lineasCarrito.find(linea => linea.id === id);
		return linea ? linea.cantidad : 0;
	};

	//  Calcula cantidad total de artículos
	const getCantidadTotal = () =>
		lineasCarrito.reduce((total, linea) => total + linea.cantidad, 0);

	//  Calcula importe total del carrito
	const getTotalCarrito = () => {
		return lineasCarrito.reduce(
			(total, linea) => total + linea.cantidad * linea.precio, 0
		);
	};

	//	Acción reset
	const reset = () => setLineasCarrito([]);

	//	Render !!!
	return (
        <objCarritoContext.Provider 
            value={{
				lineasCarrito,
				agregarLinea,
				borrarLinea,
				getCantidadById,
				getCantidadTotal,
				getTotalCarrito,
                reset
            }}
        >

			{children}

		</objCarritoContext.Provider>
	);
};
