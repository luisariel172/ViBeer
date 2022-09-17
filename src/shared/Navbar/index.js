
//
//	Navegación de bootstrap
//

//	Framework !!!
import React, { useState, useEffect } from 'react';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//	CSS !!!
import './index.css'

//	Propio !!!
import logo from './../../assets/img/logo.png';
import { getCollectionWithQuery } from '../../api/db';
import { WidgetCarrito } from '../index';

//	Default !!!
export default function NavBar() {

	//	Categorías preferidas
	const [idLager, setIdLager] = useState('');
	const [idNegras, setIdNegras] = useState('');
	const [idPaleAle, setIdPaleAle] = useState('');
	useEffect(() => {

		//	Lee categoría por cnombre
		const getId = async (nombre) => {
			return await getCollectionWithQuery(
				'categorias', ['nombre', '==', nombre])
			}
		getId('Lager')
			.then(cats => {setIdLager(cats[0].id)})
			.catch(() => setIdLager(''))
		getId('Negras')
			.then(cats => {setIdNegras(cats[0].id)})
			.catch(() => setIdNegras(''))
		getId('Pale Ale').then(cats => {setIdPaleAle(cats[0].id)})
			.catch(() => setIdPaleAle(''))

	});

	//	Botón buscar producto
	const buscarProducto = () => {
	};

	//	Render !!!
	return (
		<Navbar id='header' expand='lg'>
			<Container fluid className='sombra'>
				<Navbar.Brand href='/' className='px-5'>
					<img src={logo} width='150px' alt={'xxx'} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0 nav-max-height text-white'
						navbarScroll
					>
						<Nav.Link href='/todas'>Todas</Nav.Link>
						<Nav.Link href={'/categoria/' + idLager}>Lager</Nav.Link>
						<Nav.Link href={'/categoria/' + idNegras}>Negras</Nav.Link>
						<Nav.Link href={'/categoria/' + idPaleAle}>Pale Ale</Nav.Link>
						<Form className='d-flex'>
							<Form.Control
								type='search'
								placeholder='Buscar'
								className='me-2'
								aria-label='Search'
							/>
							<Button
								variant='outline-success'
								onClick={buscarProducto}
							>
								Buscar
							</Button>
						</Form>
					</Nav>
					<Nav className='px-3'>
						<Nav.Link href='/login'>
							<i className='fa fa-user px-2' aria-hidden='true'></i>
							Ingresá
						</Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown title='Administración' id='navbarScrollingDropdown'>
							<NavDropdown.Item href='/admin_lista_productos'>Productos</NavDropdown.Item>
							<NavDropdown.Item href='/admin_lista_categorias'>Categorías</NavDropdown.Item>
							<NavDropdown.Item href='/admin_lista_ordenes'>Órdenes</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='/admin_lista_usuarios'>Usuarios</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<div className='px-5'>
						<WidgetCarrito />
					</div>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);

};
