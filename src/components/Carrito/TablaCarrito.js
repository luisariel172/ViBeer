
//
//	Renderiza tabla de productos de carrito de compra
//

import './index.css';

//	Context de carrito
import { useContextCarrito } from '../ContextCarrito';

//	Tabla de bootstrap
import Table from 'react-bootstrap/Table';

//  Fila de la tabla
import FilaTablaCarrito from './FilaTablaCarrito';

function TablaCarrito({ lineas }) {

	//	Obtiene funciones del carrito
	const { getCantidadTotal, getTotalCarrito } = useContextCarrito();

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
					<th>{getCantidadTotal()}</th>
					<th/>
					<th>$ {getTotalCarrito()}</th>
					<th/>
				</tr>
			</tfoot>

		</Table>
	);
};

export default TablaCarrito;
