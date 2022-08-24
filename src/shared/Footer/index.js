
//
//	Renderiza pie claseado con bootstrap
//

import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './index.css';

function Footer() {
	return (
		<>
		<div className='div-footer py-5'>
			<div className='container'>
				<div className='row'>

					<div className='col'>
						<h4>Información</h4>
						<ListGroupItem>
							<a href='#!'><li>Preguntas frecuentes</li></a>
							<a href='#!'><li>Aviso legal</li></a>
							<a href='#!'><li>Términos y condiciones</li></a>
						</ListGroupItem>
					</div>

					<div className='col'>
						<h4>Contacto</h4>
						<ListGroupItem>
							<li>Lincoln 93 dúplex 2</li>
							<li>(4000) San Miguel de Tucumán - Argentina</li>
							<li>
								<i className='fas fa-phone' aria-hidden='true'/>
								{' '}+54 9 381 5 460 614
							</li>
							<li>
								<i className='fas fa-envelope' aria-hidden='true'/>
								{' '}jorgepereyra751@gmail.com
							</li>
						</ListGroupItem>
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
