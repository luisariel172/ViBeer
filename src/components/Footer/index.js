
//
//	Renderiza pie claseado con bootstrap
//

import './index.css';
import React from 'react';

//	Navegación de bootstrap
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
	return (
		<>
		<div className='footer container-fluid'>
			<div className='container'>
				<div className='row'>

					<div className='col'>
						<h4>Información</h4>
						<lu>
							<a href='#!'><li>Aviso legal</li></a>
							<a href='#!'><li>Términos y condiciones</li></a>
							<a href='#!'><li>Contacto</li></a>
						</lu>
					</div>

					<div className='col'>
						<h4>Contacto</h4>
						<lu>
							<li>Lincoln 93</li>
							<li>(4000) San miguel de tucumán</li>
							<li>Argentina</li>
							<li>+54 9 381 5 460 614</li>
							<li>jorgepereyra751@gmail.com</li>
						</lu>
					</div>

					<div className='col'>
						<h4>Redes</h4>
						<a className='btn btn-outline-light btn-social mx-3 my-2' href='#!'><i className='fab fa-fw fa-facebook-f'></i></a>
						<a className='btn btn-outline-light btn-social mx-3 my-2' href='#!'><i className='fab fa-fw fa-twitter'></i></a>
						<a className='btn btn-outline-light btn-social mx-3 my-2' href='#!'><i className='fab fa-fw fa-instagram'></i></a>
					</div>

				</div>
			</div>
		</div>
		<div className='copyright py-4 text-center text-white bg-black'>
			<div className='container'>
				<small className='small-copyright'>
					ViBeer - 2022 &copy; Todos los dereschos reservados |
					Dev. by Jorge Pereyra Software
				</small>
			</div>
		</div>
		</>
	)
}

export default Footer;
