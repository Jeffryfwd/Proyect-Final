import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from "@emailjs/browser";
import { Alert } from 'react-bootstrap';

function Modalpedir() {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  });

  const SendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_hgva5kp', 'template_sqeloqb', event.target, 'tMD2iG4ioZstSyWsK')
      .then(() => {
        setAlert({ show: true, message: 'Solicitud realizada con éxito', variant: 'success' });
        setFormData({ name: '', email: '', tel: '', message: '' }); // Limpiar campos
      })
      .catch(() => {
        setAlert({ show: true, message: 'Error al enviar la solicitud', variant: 'danger' });
      });
  };

  const handleClose = () => {
    setShow(false);
    setFormData({ name: '', email: '', tel: '', message: '' }); // Limpiar formulario al cerrar
    setAlert({ show: false, message: '', variant: '' }); // Limpiar alerta
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Button variant="primary" style={{ backgroundColor: '#388e3c' }} onClick={handleShow}>
        Encargar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Petición del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alert.show && (
            <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
              {alert.message}
            </Alert>
          )}
          <form onSubmit={SendEmail} id="contactForm">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                name='name'
                id="name"
                type="text"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Nombre completo</label>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="email"
                name='email'
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Dirección de correo</label>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="phone"
                type="tel"
                name='tel'
                placeholder="(123) 456-7890"
                value={formData.tel}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Número de teléfono</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="message"
                name='message'
                placeholder="Enter your message here..."
                style={{ height: '10rem' }}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Mensaje</label>
            </div>

            <div className="d-grid">
              <button style={{ backgroundColor: '#388e3c' }} className="btn btn-primary btn-lg" id="submitButton" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalpedir;
