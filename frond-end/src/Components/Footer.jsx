import React from 'react'

function Footer() {
  return (
    <div>
<footer class="" style={{ backgroundColor: '#6ba65b' }}>
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"></div>
                    <div class="col-auto">
                    <div className="mapaCont">
            <div><h1>NUESTRA UBICACIÓN</h1></div>
            <iframe
                src="https://maps.google.com/maps?q=fwd%20Costa%20Rica&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"

            ></iframe>
        </div>
        <div className='header'>
        <header className='Header' >
        <h1 style={{ fontSize: '2.5rem', color: '#ffff' }}>Fertilizantes CoopeFray RL</h1>
        <p style={{ fontSize: '1.2rem', color: '#ffff' }}>Tu opción ideal para fertilizantes de calidad</p>
        <p style={{color: '#ffff'}}><strong>Teléfono:</strong> 64324438</p>
        <p style={{color: '#ffff'}}><strong>Email:</strong> <a href="mailto:ebarrantesrivas@gmail.com">ebarrantesrivas@gmail.com</a></p>
      </header>
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer