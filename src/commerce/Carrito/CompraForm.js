
//
//	Renderiza formulario
//

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { isNull } from '../../funciones';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.css';

//	Objeto-expresión-regular para validar e-mail
const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

//	Default !!!
function CompraForm({ ejecutar }) {

	//	Valores
	const [valores, setValores] = useState({
		nombre: {valor: '', error: true},
		telefono: {valor: '', error: true},
		email: {valor: '', error: true}
	});

	//	Actualiza valores de estados al vuelo
	function handleChange(evt) {
    	const { name, value } = evt.target;
		const nuevos = {...valores, [name]: {valor: value, error: false}};
	    setValores(nuevos);
	};

	//	Valida inputs
	function handleBlur(evt) {

    	//	Lee nombre y valor del input
		const { name, value } = evt.target;

		//	Evalúa cada campo
		let error = false;
		let msj = '';
		switch (name) {
			case 'nombre':
				error = isNull(value)
				msj = 'Debes ingresar comprador.'
				break
			case 'telefono':
				error = isNull(value)
				msj = 'Debes ingresar teléfono.'
				break
			case 'email':
				error = !emailRegexp.test(value);
				msj = 'Formato de e-mail inválido.';
				if (error && isNull(value)) msj = 'Debes ingresar e-mail';
				break
		};
		const nuevos = {...valores, [name]: {valor: value, error}};
		setValores(nuevos);
		if (error) {
			toast.error(msj, {
				position: 'top-right',
				autoClose: 2000,
				pauseOnHover: true
			});
		};
	};

	//	Ejecuta formulario
	function handleSubmit(evt) {
		evt.preventDefault();

		//	Valida si hay errores
		let hayErrores = false;
		for (let campo in valores) {
            hayErrores = hayErrores || valores[campo]['error'];
        };
		
		//	Decide ejecución
		if (hayErrores) {
			toast.error('Información faltante o errónea.', {
				position: 'top-right',
				autoClose: 2000,
				pauseOnHover: true
			});
		} else {
			ejecutar({
				nombre: valores.nombre.valor,
				telefono: valores.telefono.valor,
				email: valores.email.valor
			});
		};
	};

	//	Render !!!
	return (
		<Form className='text-white ps-2' onSubmit={handleSubmit}>

			<ToastContainer />

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='nombre'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					Comprador
				</Form.Label>
				<Col sm='7'>
					<Form.Control
						name='nombre'
						className='my-1 control-form'
						defaultValue={valores.nombre.valor}
        				onChange={handleChange}
						onBlur={handleBlur}
					/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='telefono'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					Teléfono
				</Form.Label>
				<Col sm='5'>
					<Form.Control
						name='telefono'
						className='my-1 control-form'
						defaultValue={valores.telefono.valor}
        				onChange={handleChange}
						onBlur={handleBlur}
					/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='email'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					E-mail
				</Form.Label>
				<Col sm='7'>
					<Form.Control
						name='email'
						type='email'
						className='my-1 control-form'
						defaultValue={valores.email.valor}
        				onChange={handleChange}
						onBlur={handleBlur}
				        aria-errormessage='emailErrorID'
        				aria-invalid={valores.email.error}
					/>
				</Col>
			</Form.Group>

			<div className='text-end'>
				<button type='submit' className='btn mt-4'>
					Comprar
				</button>
			</div>

  		</Form>
	);
};

export default CompraForm;
