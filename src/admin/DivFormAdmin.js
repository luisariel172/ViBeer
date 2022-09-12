
//
//	Wrapper genérico para formulario de administración
//

//	Framework !!!
import React from 'react';
import { ToastContainer } from 'react-toastify';

//	CSS !!!
import './index.css';

//	Default !!!
export default function DivFormAdmin({ children, titulo, subTitulo }) {

	//	Render !!!
	return (
		<div className='div-admin'>
			<ToastContainer />
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
