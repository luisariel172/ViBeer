
//
//	Renderiza grupo etiqueta-y-campo genérico de un formulario
//

//	Framework !!!
import React, { useEffect, useState } from 'react';

//	Propio !!!
import Control from './Control';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//	CSS
import './index.css';

//	Default !!!
export default function GrupoForm({
		etiqueta = '*etiqueta',
		campo = '*campo',
		tamaño = 7,
		tipo = 'input',
		funSetter = null,
		funGetter = null,
		funValid = null,
		clasesControl = '',
		modo = (campo === 'id' ? 'consulta' : ''),
		setFoco = false,
		seleccion = {coleccion: '', campo: ''},
		tooltip = ''
	}) {

	//	Error y mensajes del componente
	const [error, setError] = useState(false);
	const [msjErrores, setMsjErrores] = useState('');
	useEffect(() => {
		if (funValid) {
			const {error, msjErrores} = funValid(campo, getValor());
			setError(error);
			setMsjErrores(msjErrores);
		}
	})

	//	Lee valor
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

		//	Evalúa y memoriza error y mensaje
		if (funValid) {
			const {error, msjErrores} = funValid(name, value);
			setError(error);
			setMsjErrores(msjErrores);
		}

	};

	//	Render !!!
	return (
		<Form.Group
			key={campo}
			as={Row}
			className='my-1 px-1 grupo-form'
			controlId={campo}
		>
			<Form.Label
				className='my-1 me-2 etiqueta-form'
				column
				sm='2'
			>

				{etiqueta}

			</Form.Label>

			<Col sm={tamaño}>
				<Control
					key={campo}
					name={campo}
					type={tipo}
					className={'my-1 control-form ' + clasesControl}
					value={getValor(campo)}
					onFocusCapture={handleBlur}
					onChange={handleChange}
					onBlur={handleBlur}
					aria-errormessage={'id-error-campo-' + campo }
					aria-invalid={error}
					readOnly={modo === 'consulta'}
					autoFocus={setFoco}
					seleccion={seleccion}
					title={tooltip}
				/>
			</Col>

			<Col>
				<span
					id={'id-error-campo-' + campo}
					className='mensaje-error'
				>
					{msjErrores}
				</span>
			</Col>

		</Form.Group>
	);

};
