
//
//	Navegación de bootstrap
//

import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

import { WidgetCarrito } from '../index';
import logo from './../../assets/img/logo.png';

function NavBar() {

	return (
		<Navbar id='header' expand='lg' className='text-white'>
			<Container fluid>
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
						<Nav.Link href='/categoria/Lager'>Lager</Nav.Link>
						<Nav.Link href='/categoria/Negras'>Negras</Nav.Link>
						<Nav.Link href='/categoria/Pale Ale'>Pale Ale</Nav.Link>
						<Form className='d-flex'>
							<Form.Control
								type='search'
								placeholder='Buscar'
								className='me-2'
								aria-label='Search'
							/>
							<Button variant='outline-success'>Buscar</Button>
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
}

export default NavBar;
