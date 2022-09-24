
//
//	Devuelve función proveedora de Context de sesión de usuario
//

//	Framework !!!
import React, { useContext } from 'react';

//  Propio !!!
import { isNull } from '../../funciones';
import persistencia from './persistencia';

//  Crea objeto-contexto
const objSesionContext = React.createContext([]);

//  Función personalizada de acceso a contexto
export const useSesionContext = () => useContext(objSesionContext);

//	Default !!!
export default function SesionContext({ children }) {

	//	Sesión de usuario
	const [sesion, setSesion, delSesion] = persistencia();

	//	Devuelve true si hay sessión válida
	const sesionValida = () => {
		return (sesion && !isNull(sesion.email))
	};

	//	Acción de inicio se sesión
	const accionLogin = (sesion) => {
		setSesion(sesion);
	};

	//	Acción de cierre de sesión
	const accionLogout = () => {
        delSesion();
	};

	//	Render !!!
	return (
        <objSesionContext.Provider 
            value={{
				sesion,
				sesionValida,
				accionLogin,
				accionLogout
            }}
        >

			{children}

		</objSesionContext.Provider>
	);
};
