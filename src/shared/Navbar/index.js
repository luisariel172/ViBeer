
//
//	Navegación de bootstrap
//

//	Framework !!!
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import logo from './../../assets/img/logo.png';
import { getCollectionWithQuery } from '../../api/db';
import { WidgetSesion, WidgetCarrito } from '../index';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//	CSS !!!
import './index.css'

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

	//	Navegador para moverse
	const navegar = useNavigate();
	
	//	Botón buscar producto
	const buscarProducto = (evt) => {
		evt.preventDefault();
		navegar(`/todas/${evt.target.buscar.value}`);
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
						<Form
							className='d-flex'
							onSubmit={buscarProducto}
							autoComplete='off'
						>
							<Form.Control
								name='buscar'
								type='search'
								placeholder='Buscar por nombre'
								className='me-2'
								aria-label='Search'
							/>
							<Button
								variant='outline-success'
								type='submit'
							>
								Buscar
							</Button>
						</Form>
					</Nav>
					<Nav className='px-3'>

						<WidgetSesion/>

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
