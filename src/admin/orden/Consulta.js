
//
//	Renderiza consulta de orden
//

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDocument } from '../../api/db';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../index.css';

//	Tabla con items de la orden
import ConsultaTabla from './ConsultaTabla';

//	Main !!!
function Consulta() {

	//	Captura parámetros
	const { id, todas } = useParams();

	//	Resuelve ruteo de vuelta
	const pathAceptar = todas ? '/todas' : '/admin_lista_ordenes';

	//	Lee orden
	const vacio = { comprador: {}, items: []};
	const [itemDoc, setItemDoc] = useState(vacio);
	useEffect(() => {
		const getItem = async () => {
			const ret = await getDocument('ordenes', id);
			return ret || vacio;
		};
		getItem().then(itemDoc => setItemDoc(itemDoc))
	}, []);

	return (
		<>
		<div className='div-lista'>
		<div className='container'>
			<div className='my-5'>
				<h2>Orden</h2>
			</div>
		<div className='row align-items-center justify-content-center'>
		<div className='col-8 p-5 border rounded'>

		<h5 className='text-white py-3 text-start'>
			Datos generales
		</h5>

		<Form className='text-white'>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='formId'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					Id
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						className='my-1 control-form'
						readOnly
						defaultValue={itemDoc.id}
					/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='formFecha'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>Fecha</Form.Label>
				<Col sm='4'>
					<Form.Control
						className='my-1 control-form'
						type='date'
						readOnly
						defaultValue={itemDoc.fecha}
					/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='formFecha'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					Comprador
				</Form.Label>
				<Col sm='7'>
					<Form.Control
						className='my-1 control-form'
						readOnly
						defaultValue={itemDoc.comprador.nombre}
					/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='formFecha'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					Teléfono
				</Form.Label>
				<Col sm='5'>
					<Form.Control
						className='my-1 control-form'
						readOnly
						defaultValue={itemDoc.comprador.telefono}
					/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} className='my-1 px-1 grupo-form' controlId='formFecha'>
				<Form.Label className='my-1 me-2 etiqueta-form' column sm='2'>
					E-mail
				</Form.Label>
				<Col sm='7'>
					<Form.Control
						className='my-1 control-form'
						readOnly
						defaultValue={itemDoc.comprador.email}
					/>
				</Col>
			</Form.Group>

			<h5 className='text-white py-3 text-start'>
				Items
			</h5>

			<ConsultaTabla items={itemDoc.items} total={itemDoc.total} />

			<Form.Group as={Row} className='text-end py-5'>
				<Link to={pathAceptar} >
					<Button size='md' className='w-25'>
						Aceptar
					</Button>
				</Link>
			</Form.Group>

  		</Form>

		</div>
		</div>
		</div>
		</div>
		</>
	);

};

export default Consulta;
