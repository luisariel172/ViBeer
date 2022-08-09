//
//  Lanza la aplicación !!!
//

//	React y App
import React, { useEffect } from 'react';
import './App.css';

//	Básicos
import { Home, Navbar, Footer } from './components';

//	Router
import { Routes, Route } from 'react-router-dom';

//	Contador de compra tipo Context
import { ContadorCompra } from './components';

//	Galería de todas
import { ItemListContainer as Galeria, ItemDetailContainer} from './components';

function App() {

	//	Limpia contador de compra
	useEffect(() => {
		localStorage.removeItem('contador_compra');
	}, [])

	return (
		<div className='App'>
			<header>
				<ContadorCompra>
					<Navbar />
					<Routes>
						<Route path='/' element = {<Home />} />
						<Route path='/todas' element = {<Galeria />} />
						<Route path='/lager' element = {<Galeria categoria='Lager'/>} />
						<Route path='/negras' element = {<Galeria categoria='Negras'/>} />
						<Route path='/paleale' element = {<Galeria categoria='Pale Ale'/>} />
						<Route path='/productos/:id' element = {<ItemDetailContainer />} />
					</Routes>
				</ContadorCompra>
			</header>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
