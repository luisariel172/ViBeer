
//
//	Componentes de administración
//

//	Productos
import ListaProductos from './producto/Lista';
import AgregarProducto from './producto/Agregar';
import CargaProductos from './producto/Carga';
import ConsultaProducto from './producto/Consulta';
import EdicionProducto from './producto/Edicion';

//	Categorías
import ListaCategorias from './categoria/Lista';
import AgregarCategoria from './categoria/Agregar';
import CargaCategorias from './categoria/Carga';
import ConsultaCategoria from './categoria/Consulta';
import EdicionCategoria from './categoria/Edicion';

//	Órdenes
import ListaOrdenes from './orden/Lista';
import CargaOrdenes from './orden/Carga';
import ConsultaOrden from './orden/Consulta';

//	Usuarios
import ListaUsuarios from './usuario/Lista';
import AgregarUsuario from './usuario/Agregar';
import CargaUsuarios from './usuario/Carga';
import ConsultaUsuario from './usuario/Consulta';
import EdicionUsuario from './usuario/Edicion';

export {
	ListaProductos, AgregarProducto, CargaProductos, ConsultaProducto,
		EdicionProducto,
	ListaCategorias, AgregarCategoria, CargaCategorias, ConsultaCategoria,
		EdicionCategoria,
	ListaOrdenes, CargaOrdenes, ConsultaOrden,
	ListaUsuarios, AgregarUsuario, CargaUsuarios, ConsultaUsuario,
		EdicionUsuario
};
