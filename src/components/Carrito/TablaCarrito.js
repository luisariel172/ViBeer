
//
//	Renderiza carrito en forma de tabla
//

import './index.css';

//	Tabla de bootstrap
import Table from 'react-bootstrap/Table';

//  Fila de la tabla
import FilaTablaCarrito from './FilaTablaCarrito';

function TablaCarrito({ lineas }) {

	//  Calcula cantidad total de artículos
	const totalArticulos = () =>
		lineas.reduce((total, linea) => total + linea.cantidad, 0);

	//  Calcula total del carrito
	const totalCarrito = () => {
		return lineas.reduce(
			(total, linea) => total + linea.cantidad * linea.precio, 0
		);
	};

	return (
		<Table responsive className='text-white tamaño-fuente-tabla'>

			<thead>
				<tr>
					<th>Producto</th>
					<th/>
					<th>Cantidad</th>
					<th>Precio</th>
					<th>Importe</th>
					<th/>
				</tr>
			</thead>

			<tbody>
				{lineas.map((linea) => 
					<FilaTablaCarrito key={linea.id} linea={linea} />
				)}
			</tbody>

			<tfoot>
				<tr className='text-center'>
					<th/>
					<th>Totales</th>
					<th>{totalArticulos()}</th>
					<th/>
					<th>$ {totalCarrito()}</th>
					<th/>
				</tr>
			</tfoot>

		</Table>
	);
};

export default TablaCarrito;
