import React, { useState, useEffect } from 'react';
import Abono from '../Img/Abono1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../Img/Img1.webp';
import img2 from '../Img/img2.webp';
import Img3 from '../Img/Img3.jpg';
import Tierra from '../Img/Tierra.jpg'
import '../Styles/Carrusel.css';
function Inicio() {
 

  return (
    <div>
      <div className='Bienvenido'>
      <h2 className='Titleinicio'>¡Bienvenidos a Nuestro Proyecto de Fertilizantes!</h2>
      <p className='InicioText'>Cultivando Sostenibilidad y Calidad en Cada Grano
En el mundo actual, donde la agricultura enfrenta múltiples desafíos, nuestro proyecto surge como una respuesta innovadora y responsable. Nos dedicamos a la producción de fertilizantes naturales que promueven el crecimiento saludable de las plantas, mientras cuidamos de nuestro valioso medio ambiente.
</p>
</div>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={Img1} alt="Primera Imagen" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Segunda Imagen" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Img3} alt="Tercera Imagen" />
        </div>
         <div className="carousel-item">
          <img className="d-block w-100" src={Img3} alt="Tercera Imagen" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>

      
     

     
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder" style={{ color: '#388e3c' }}> Productos Destacados</h2>
                <p className="lead fw-normal text-muted mb-5">Fertilizantes Naturales de Alta Calidad</p>
              </div>
            </div>
          </div>
          <div className="row gx-5" id='ContentCarde'>
            {/* Puedes agregar aquí noticias o publicaciones del blog */}
            <div className="col-lg-4 mb-5" id='Cartas'>
              <div className="card h-100 shadow border-0" id='Card2'>
                <img className="card-img-top" id='Bocachi' src={Abono} alt="..." />
                <div className="card-body p-4" id='Card2'>
                  <h5 className="card-title">Bocashi:</h5>
                  <p className="card-text mb-0">Este abono fermentado se elabora a partir de residuos orgánicos, lo que lo convierte en un recurso valioso para enriquecer el suelo. Su proceso de fermentación no solo mejora la calidad del suelo, sino que también ayuda a retener la humedad, vital para el crecimiento de las plantas.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={Tierra} alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title">Tierra Fermentada:</h5>
                  <p className="card-text mb-0">Ideal para mejorar la estructura del suelo y aumentar su capacidad para retener nutrientes. Este fertilizante aporta una combinación perfecta de microorganismos beneficiosos que promueven un ecosistema saludable.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title">Testimonios de Clientes</h5>
                  <p className="card-text mb-0">Lo que dicen nuestros clientes sobre nuestros productos.</p>
                </div>
              </div>
            </div>
            <div className="why-choose-section">
  <h2 className="section-title">¿Por qué Elegir Nuestros Fertilizantes?</h2>
  <br />
</div>

<div className="sustainability">
  <h2 className="sub-title">Compromiso con la Sostenibilidad:</h2>
  <p className="description">Utilizamos prácticas de producción que son ecológicas y responsables. Nuestro objetivo es ayudar a restaurar la salud del suelo y reducir el uso de químicos sintéticos, promoviendo así un ciclo de vida natural.</p>
  <br />
</div>

<div className="personalized-advisory">
  <h2 className="sub-title">Asesoría Personalizada:</h2>
  <p className="description">Creemos en el valor de la educación. Ofrecemos asesoría personalizada para ayudarte a seleccionar el producto adecuado y maximizar su efectividad en tus cultivos. Nuestro equipo está siempre disponible para guiarte en el proceso.</p>
  <br />
</div>

<div className="quality-assured">
  <h2 className="sub-title">Calidad Garantizada:</h2>
  <p className="description">Cada lote de nuestros fertilizantes pasa por un riguroso control de calidad. Nos aseguramos de que cada producto cumpla con los más altos estándares para ofrecer resultados efectivos y confiables.</p>
</div>


         <div className="py-5 bg-light">
        <div className="container px-5 my-5 text-center">
          <h2 className="fw-bolder" style={{ color: '#388e3c' }}>Testimonio</h2>
          <div className="fs-4 mb-4 fst-italic">"Desde que empecé a usar los fertilizantes de este proyecto, he notado una gran diferencia en mis cultivos. ¡Mis plantas son más saludables y producen más!" </div>
          <div className="fw-bold">- Juan Pérez, agricultor local.</div>
        </div>
      </div>

         </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
