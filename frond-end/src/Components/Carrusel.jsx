import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Img1 from '../Img/Img1.webp';
import img2 from '../Img/img2.webp';
import Img3 from '../Img/Img3.jpg';
import '../Styles/Carrusel.css';

function Carrusel() {
  useEffect(() => {
    // Verifica si bootstrap está definido
    if (window.bootstrap) {
      const carouselElement = document.querySelector('#carouselExampleIndicators');
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // Intervalo en ms
        ride: 'carousel'
      });
    } else {
      console.error('Bootstrap no está definido');
    }
  }, []);

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Img1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img3} alt="Third slide"/>
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
    </div>
  );
}

export default Carrusel;
