
//
//	Renderiza formulario de inicio de sesión
//

//	Framework !!!
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//	Propio !!!
import { itemFormWithItem, getterForm, setterForm, itemWithForm }
	from '../../admin/funAdmin';
import DivFormAdmin from '../../admin/_wrappers/DivFormAdmin';
import { emailRegexp, isNull, alertaToast } from '../../funciones';
import { GrupoForm } from '../../shared';
import { getCollection } from '../../api/db';
import { useSesionContext } from '../index';

//	Bootstrap !!!
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

//	CSS !!!
import './index.css';

//	Default !!!
export default function Login() {

    //	Sesión de Context
	const { sesion, accionLogin } = useSesionContext();

	//	Navegador para ir a /todas
	const navegar = useNavigate();

	//	Objeto-item del formulario
	const [itemForm, setItemForm] = useState({});
	useEffect(() => {
		const inicial = itemFormWithItem(sesion, validator);
		setItemForm(inicial);
	}, [])

	//	Array de usuarios con mail y password para validación
	const [arrUsuarios, setArrUsuarios] = useState([]);
	useEffect(() => {
		async function getItems() {
			await getCollection('usuarios')
			.then(items => items.map(item => {
				return {
					email: item.email, nombre: item.nombre, passw: item.passw
				}
			}))
			.then(items => setArrUsuarios(items));
		}
		getItems()
	}, []);

	//	Devuelve usuario buscando con e-mail
	const getUsuarioByEmail = (email) => {
		const usr = arrUsuarios.find(usr => {
			return usr.email.trim() === email.trim()
		});
		return usr;
	};

	//	Devuelve true si valida email y password
	const validaSesion = () => {

		//	Valida q se haya identificado usuario
		if (isNull(itemForm.usuario.valor)) return false;

		return (
			arrUsuarios.find(usr => {
				return (
					usr.email.trim() === itemForm.email.valor.trim() &&
					usr.passw === itemForm.passw.valor
				);
			})
			? true
			: false
		);
	}

	//	Lector de campo
	const getter = (campo) => {
		return getterForm(itemForm, campo);
	};

	//	Escritor de campo
	const setter = (campo, valor) => {
		setterForm(setItemForm, itemForm, campo, valor, validator);
	};

	//	Validador de campo del formulario
	//	Devuelve {error: Boolean, msjErrores: String}
	const validator = (campo, valor) => {

		if (isNull(itemForm)) return {};

		let msjErrores;
		switch (campo) {
			case 'email':
				if (itemForm.usuario) itemForm.usuario.valor = '';
				if (isNull(valor)) {
					msjErrores = 'Requerido.'
				} else if (!emailRegexp.test(valor)) {
					msjErrores = 'Inválido.';
				} else {
					msjErrores = '';
					const usr = getUsuarioByEmail(valor);
					if (itemForm && itemForm.usuario)
						itemForm.usuario.valor = (usr ? usr.nombre : '');
				};
				break
			case 'usuario':
				msjErrores = (isNull(valor) ? 'Requerido.' : '');
				break
			default:
				msjErrores = '';
		};
		return {error: !isNull(msjErrores), msjErrores: msjErrores};
	};

	//	Ejecuta subnmit
	const runSubmit = (evt) => {
		evt.preventDefault();
		
		if (validaSesion()) {
			alertaToast(`Hola ${itemForm.usuario.valor} !!!`, 'success');
			accionLogin(itemWithForm(itemForm));
			navegar('/todas');
		} else {
			alertaToast('E-mail o password incorrectos.');
		};
	};

	//	Render !!!
	return (
		<DivFormAdmin titulo='Ingresá' subTitulo='Ingrese e-mail y password'>
			<Form
				className='px-2'
				onSubmit={(evt) => runSubmit(evt)}
				autoComplete='off'>

				<GrupoForm 
					etiqueta = 'E-mail'
					campo = 'email'
					tamaño = '7'
					funSetter = {setter}
					funGetter = {getter}
					funValid = {validator}
					setFoco = {true}
				/>

				<GrupoForm
					etiqueta = 'Password'
					campo = 'passw'
					tipo = 'password'
					tamaño = '5'
					funGetter = {getter}
					funSetter = {setter}
				/>

				<GrupoForm
					etiqueta = 'Usuario'
					campo = 'usuario'
					tamaño = '7'
					funGetter = {getter}
					funValid = {validator}
					modo = 'consulta'
					tooltip = 'Ingrese e-mail para identificar usuario.'
				/>

				<div className='text-end py-4' >
					<Button
						type = 'submit'
						className = 'w-25 btn btn-primary btn-md me-5'
						title = 'Si es que ya estoy registrado.'
					>
						Ingresar
					</Button>
					{' '}
					<Link to={'/todas'}>
						<Button className = 'w-25 btn btn-primary btn-md'>
							Cancelar
						</Button>
					</Link>
				</div>

			</Form>

			<div className='text-end py-3'>
				<Link
					to = '/registrarse'
					title = 'No estoy registrado aún.'
				>
					Soy nuevo y quiero registrarme.
				</Link>
			</div>

		</DivFormAdmin>
	);

};
