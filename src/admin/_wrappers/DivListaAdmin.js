
//
//	Renderiza DIV genérico para lista de items de administración
//

//	Framework !!!
import React, { useState, useEffect } from 'react';

//	Propio !!!
import { getCollection } from '../../api/db';
import BotonCargaInicial from '../_botones/BotonCargaInicial';
import BotonAgregarItem from '../_botones/BotonAgregarItem';

//	CSS
import '../index.css';

//	Default !!!
export default function DivListaAdmin({
		coleccion, singularCol, ListaTabla, titulo, textoAgregar,
		noCargaInicial, noAgregar
	}) {

	//	Valida y resuleve parámetros
	if (!coleccion || !singularCol || !ListaTabla) return 'Falta info.';
	titulo = titulo || coleccion;
	textoAgregar = textoAgregar || `Agregar ${singularCol}`;

	//	Lee items
	const [items, setItems] = useState([]);
	useEffect(() => {
		async function getItems() {
			await getCollection(coleccion)
				.then(items => setItems(items));
		}
		getItems();
	}, []);

	//	Render !!!
	return (
		<div className='div-admin'>
			<div className='container'>
				<div className='row py-3 justify-content-between'>
					<div className='col-4'>

						<h2>{titulo}</h2>

						<br />
					</div>
					<div className='col d-flex justify-content-end'>

						{!noAgregar
							? <BotonAgregarItem
								singularCol={singularCol}
								texto={textoAgregar} />
							: null
						}

						{!noCargaInicial
							? <BotonCargaInicial
								nombreCol={coleccion} />
							: null
						}

					</div>
				</div>
				<div className='row mx-1'>

					<ListaTabla items={items} />

				</div>
			</div>
		</div>
	);

};
