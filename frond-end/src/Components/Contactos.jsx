import React from 'react'
import emailjs from "@emailjs/browser";
function Contactos() {
  const SendEmail= (event)=>{
    event.preventDefault();

    emailjs.sendForm('service_bflcyx9', 'template_x3ozmn8', event.target, 'tMD2iG4ioZstSyWsK')
  }
  return (
   <div>
     <div>
      <section className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Ponte en contacto con nosotro</h1>
              <p className="lead fw-normal text-muted mb-0">Nos encantaria saber de usted</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form onSubmit={SendEmail} id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      name='name'
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label htmlFor="name" name>Nombre completo</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">
                      A name is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      name='email'
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label>Direccion de correo</label>
                    <div className="invalid-feedback" data-sb-feedback="email:required">
                      An email is required.
                    </div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">
                      Email is not valid.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      name='tel'
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label htmlFor="phone">Numero de telefono</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">
                      A phone number is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name='message'
                      placeholder="Enter your message here..."
                      style={{ height: '10rem' }}
                      data-sb-validations="required"
                    ></textarea>
                    <label htmlFor="message">Mensaje</label>
                    <div className="invalid-feedback" data-sb-feedback="message:required">
                      A message is required.
                    </div>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
            <div className="col">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-chat-dots"></i>
              </div>
              <div className="h5 mb-2">Chatea con nosotros</div>
              <p className="text-muted mb-0">Chatea en vivo con uno de nuestros especialistas de soporte.</p>
            </div>
            <div className="col">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-people"></i>
              </div>
              <div className="h5">Pregúntele a la comunidad</div>
              <p className="text-muted mb-0">Explora nuestros foros comunitarios y comunícate con otros usuarios.</p>
            </div>
            <div className="col">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-question-circle"></i>
              </div>
              <div className="h5">Centro de soporte</div>
              <p className="text-muted mb-0">Explore las preguntas frecuentes y los artículos de soporte para encontrar soluciones.</p>
            </div>
            <div className="col">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="h5">Llamanos</div>
              <p className="text-muted mb-0">Llámenos durante el horario comercial normal al (555) 892-9403.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">Copyright &copy; Your Website 2023</div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Terms</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>  
   </div>
  )
}

export default Contactos