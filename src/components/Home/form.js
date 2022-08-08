
//
//	Formulario claseado con bootstrap y customizado
//

function Formulario() {
	return (
        <section className='page-section' id='contact'>
            <div className='container'>
                <h2 className='text-center mx-1 my-3'>
					Contacto
				</h2>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-xl-7'>
                        <form id='contactForm' data-sb-form-api-token='API_TOKEN'>
                            <div className='form-floating mb-3'>
                                <input className='form-control' id='name' type='text' placeholder='Enter your name...' data-sb-validations='required' />
                                <label htmlFor='name'>Nombre</label>
                                <div className='invalid-feedback' data-sb-feedback='name:required'>A name is required.</div>
                            </div>
                            <div className='form-floating mb-3'>
                                <input className='form-control' id='email' type='email' placeholder='name@example.com' data-sb-validations='required,email' />
                                <label htmlFor='email'>Correo electrónico</label>
                                <div className='invalid-feedback' data-sb-feedback='email:required'>An email is required.</div>
                                <div className='invalid-feedback' data-sb-feedback='email:email'>Email is not valid.</div>
                            </div>
                            <div className='form-floating mb-3'>
                                <input className='form-control' id='phone' type='tel' placeholder='(123) 456-7890' data-sb-validations='required' />
                                <label htmlFor='phone'>Teléfono</label>
                                <div className='invalid-feedback' data-sb-feedback='phone:required'>A phone number is required.</div>
                            </div>
                            <div className='form-floating mb-3'>
                                <textarea className='form-control' id='message' type='text' placeholder='Enter your message here...' style={{height: '10rem'}} data-sb-validations='required'></textarea>
                                <label htmlFor='message'>Mensaje</label>
                                <div className='invalid-feedback' data-sb-feedback='message:required'>A message is required.</div>
                            </div>
                            <div className='d-none' id='submitSuccessMessage'>
                                <div className='text-center mb-3'>
                                    <div className='fw-bolder'>Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href='https://startbootstrap.com/solution/contact-forms'>https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <button className='btn btn-primary btn-xl disabled' id='submitButton' type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
	)
};

export default Formulario;
