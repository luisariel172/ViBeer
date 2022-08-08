
//
//	Navegación de bootstrap
//

import './index.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { WidgetCarrito } from '../../components';
import logo from './../../assets/img/logo.png';

function NavBar() {
	return (
		<Navbar expand='lg' className='text-white'>
			<Container fluid>
				<Navbar.Brand href='/'>
					<img src={logo} width='150px'></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0 nav-max-height text-white'
						navbarScroll
					>
						<Nav.Link href='/'>Todas</Nav.Link>
						<Nav.Link href='/'>Lager</Nav.Link>
						<Nav.Link href='/'>Negras</Nav.Link>
						<Nav.Link href='/'>Pale Ale</Nav.Link>
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
					<Nav>
						<Nav.Link href='/createuser'>Creá tu cuenta</Nav.Link>
						<Nav.Link href='/login'>Ingresá</Nav.Link>
					</Nav>

					<WidgetCarrito />

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
