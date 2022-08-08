
//
//	Home con carrusel y formulario de contacto
//

import './index.css'
import brewtiful from '../../../src/assets/img/brewtiful.png'
import Form from './form';

function Home() {
	return (
		<main className='container px-3 py-5'>

			<div className='row'>
				<div className='col-8'>
					<h1>
						Delivery de cervezas para todos los gustos
					</h1>
					<br/><br/>
					<p>
						Somos una cervecería que quiere disfrutar la vida con vos. Tenemos
						artesanales o industriales, livianas o cremosas.
					</p>
					<p>
						Ponnos a prueba y te aseguramos que vas a encontrar la que a vos
						te gusta.
					</p>
					<p>
						Estamos emocionados por compartir la euforia de ese primer
						trago de un nuevo sabor.
					</p>
				</div>
				<div className='col-3 px-0'>
					<img src={brewtiful} width='370px'/>
				</div>
			</div>

			<div className='row'>
			</div>

			<div className='row'>
			</div>

			<div className='row'>
			</div>

			<div className='row'>
			</div>

		</main>
 	);
}

export default Home;
