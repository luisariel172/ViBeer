//
//  Lanza la aplicación !!!
//

//	React y App
import React, { useEffect } from 'react';
import './App.css';

//	Básicos
import { About, Home, Navbar, Footer } from './components';

//	Router
import { Routes, Route } from 'react-router-dom';

//	Contador de compra tipo Context
import { ContadorCompra } from './components';

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
						<Route path='/about' element = {<About />} />
						<Route path='/' element = {<Home />} />
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


/*

import './App.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <div className='App'>
      <header className=''>
        <img src={logo} alt='logo'></img>
      </header>
    </div>
  );
}

export default App;
*/

/*
						<Route path='/saas' element = {<SaasPage />} />
						<Route path='/ventas' element = {<VentasPage />} />
						<Route path='/facturacion' element = {<FacturacionPage />} />
						<Route path='/colegio' element = {<ColegioPage />} />
						<Route path='/clientes' element = {<ClientesPage />} />
						<Route path='/web' element = {<WebPage />} />
*/
