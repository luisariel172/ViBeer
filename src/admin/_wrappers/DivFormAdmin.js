
//
//	Wrapper genérico para renderizar formulario de administración
//

//	Framework !!!
import React from 'react';

//	CSS !!!
import '../index.css';

//	Default !!!
export default function DivFormAdmin({ 
		titulo = 'Formulario', subTitulo = 'Datos básicos', children
	}) {

	//	Render !!!
	return (
		<div className='div-admin'>
			<div className='container'>
				<div className='my-5'>

					<h2>{titulo}</h2>

				</div>
				<div className='row align-items-center justify-content-center'>
					<div className='col-8 px-5 border rounded'>
						<h5 className='text-white py-3 text-start'>

							{subTitulo}

						</h5>

						{children}

					</div>
				</div>
			</div>
		</div>
	);

};
