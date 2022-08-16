
//
//	Renderiza fila de tabla de carrito
//

//	Importa context de carrito
import { useContextCarrito } from '../';

function FilaTablaCarrito({ linea }) {

	//	Acción borrar línea
	const { borrarLinea } = useContextCarrito();

	return (
		<tr className='text-white overflow-hidden'>
			<td className='text-left'>
				{linea.nombre}
			</td>
			<td>
				<img src={'/img/imagen' + linea.id + '.png'} width={'70px'} />
			</td>
			<td className='text-center'>
				{linea.cantidad}
			</td>
			<td className='text-center'>
				$ {linea.precio}
			</td>
			<td className='text-center'>
				$ {linea.cantidad * linea.precio}
			</td>
			<td className='text-center'>
				<button
					title = 'Borrar línea'
					onClick = {() => borrarLinea(linea.id)}
				>X</button>
			</td>
		</tr>
	);
};

export default FilaTablaCarrito;
