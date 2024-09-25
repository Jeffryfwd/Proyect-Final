import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from "@emailjs/browser";
import { Alert } from 'react-bootstrap'
function Modalpedir() {
  const [show, setShow] = useState(false);
  const [alert, setAlert]= useState({show: false, message: '', variant: ''})
  const SendEmail= (event)=>{
    event.preventDefault();
   

    emailjs.sendForm('service_hgva5kp', 'template_sqeloqb', event.target, 'tMD2iG4ioZstSyWsK')
    setAlert({show: true, message: 'Solicitud realizada con exito'})
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Encargar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={SendEmail} id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      name='name'
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                      required
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
                      required
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
                      required
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
                      required
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

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalpedir;