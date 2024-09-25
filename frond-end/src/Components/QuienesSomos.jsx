import React from 'react'

function QuienesSomos() {
  return (
    <div>
          <div className="container my-5">
      <h2 className="fw-bolder text-center" style={{ color: '#388e3c' }}>¿Quiénes Somos?</h2>
      <p className="lead text-center">
        Bienvenidos a Fertilizantes Ericka Barrantes, donde nuestra pasión por la agricultura y el compromiso con la calidad nos
        impulsan a ofrecer los mejores productos para el cuidado de tus cultivos.
      </p>
      
      <section className="text-center">
        <img src="https://dummyimage.com/600x400/ced4da/6c757d" alt="Fertilizantes Ericka Barrantes" className="img-fluid mb-4" />
        <p>
          Fundada por Ericka Barrantes Rivas, nuestra empresa se especializa en la producción de fertilizantes de alta calidad, incluyendo
          abonos orgánicos como el bocachi y tierra fermentada. Con más de [X años] de experiencia en el sector, nuestro objetivo es
          ayudar a los agricultores a maximizar el rendimiento de sus cultivos mientras cuidamos el medio ambiente.
        </p>
      </section>
      
      <h3 className="fw-bold" style={{ color: '#388e3c' }}>Nuestra Misión</h3>
      <p>
        Proveer fertilizantes accesibles y de alta calidad que ayuden a mejorar la salud de los cultivos, garantizando la satisfacción de nuestros
        clientes y contribuyendo al desarrollo sostenible de la agricultura.
      </p>
      
      <h3 className="fw-bold" style={{ color: '#388e3c' }}>Nuestra Visión</h3>
      <p>
        Convertirnos en líderes en la producción y distribución de fertilizantes orgánicos en [nombre del país o región], siendo reconocidos por
        nuestra calidad, innovación y responsabilidad ambiental.
      </p>

      <h3 className="fw-bold" style={{ color: '#388e3c' }}>Nuestros Valores</h3>
      <ul className="list-unstyled" >
        <li style={{color: '#388e3c'}}>🌱 Calidad: Nos comprometemos a ofrecer productos que cumplan con los más altos estándares.</li>
        <li style={{color: '#388e3c'}}>🌍 Sostenibilidad: Fomentamos prácticas agrícolas que protegen el medio ambiente.</li>
        <li style={{color: '#388e3c'}}>🤝 Compromiso: Estamos dedicados a la satisfacción de nuestros clientes y a su éxito.</li>
        <li style={{color: '#388e3c'}}>💡 Innovación: Siempre buscamos nuevas formas de mejorar nuestros productos y servicios.</li>
      </ul>

      <footer className="text-center mt-4">
        <p>Para más información, no dudes en contactarnos en <strong>coopefray3@gmail.com</strong> o al teléfono <strong>64324438</strong>.</p>
      </footer>
    </div>
    </div>
  )
}

export default QuienesSomos