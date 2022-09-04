
//
//	Renderiza grupo etiqueta-y-campo de un formulario
//

//	Framework !!!
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.css';

//	Default !!!
export default function GrupoForm(
		{
			etiqueta = '*etiqueta',
			campo = '*campo',
			tamaño = 7,
			tipo = 'input',
			funSetter = null,
			funGetter = null,
			funValid = null,
			msjError = '*error',
			clasesControl = '',
			modo = ''
		}
	) {

	//	Dato con error del componente
	const [error, setError] = useState(false);

	//	Lee valor inicial
	function getValor() {
	    return funGetter ? funGetter(campo) : '';
	};

	//	Actualiza valor al vuelo
	function handleChange(evt) {
    	const { name, value } = evt.target;
	    funSetter && funSetter(name, value);
	};

	//	Valida valor cuando abandona input
	function handleBlur(evt) {

		//	Lee nombre y valor del campo, luego evalúa error
		const { name, value } = evt.target;

		//	Evalúa error y memoriza
		setError(funValid ? funValid(name, value) : false);
		if (error) {
			toast.error(msjError, {
				position: 'top-right',
				autoClose: 2000,
				pauseOnHover: true
			});
		};
	};

	//	Render !!!
	return (
		<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='email'>
			<ToastContainer />
			<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
				{etiqueta}
			</Form.Label>
			<Col sm={tamaño}>
				<Form.Control
					name={campo}
					type={tipo}
					className={'my-1 control-form' + clasesControl}
					defaultValue={getValor(campo)}
					onChange={handleChange}
					onBlur={handleBlur}
					aria-errormessage={'id-error-' + campo }
					aria-invalid={error}
					readOnly={modo === 'consulta'}
				/>
			</Col>
			<Col sm='7'>
				<span
					id={'id-error-' + campo}
					className='mensaje-error'
				>
					{msjError}
				</span>
			</Col>
		</Form.Group>
	);
};
