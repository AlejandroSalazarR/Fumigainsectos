import './Servicios.css';

const Servicios = () => {
  const servicios = [
    {
      icon: '🐜',
      title: 'Fumigación',
      description: 'Aplicación de productos químicos para controlar y eliminar plagas',
      color: '#8fbc3f'
    },
    {
      icon: '🐀',
      title: 'Desratización',
      description: 'Control de roedores con productos raticidas anticoagulantes',
      color: '#4facfe'
    },
    {
      icon: '🪵',
      title: 'Tratamiento de Comején',
      description: 'Tratamientos curativos y preventivos para termitas',
      color: '#f093fb'
    },
    {
      icon: '💧',
      title: 'Aspersión o Pulverización',
      description: 'Aplicación de insecticidas de alto poder residual',
      color: '#f5576c'
    },
    {
      icon: '🌫️',
      title: 'Termonebulización',
      description: 'Método efectivo para control de voladores',
      color: '#667eea'
    },
    {
      icon: '☁️',
      title: 'Nebulización',
      description: 'Aplicación en ultra bajo volumen con gotas pequeñas',
      color: '#764ba2'
    },
    {
      icon: '💩',
      title: 'Gel Insecticida Dosificable',
      description: 'Cebo atrayente para cucarachas, sin olor ni manchas',
      color: '#fa709a'
    },
    {
      icon: '☠️',
      title: 'Gasificación (Fumigación)',
      description: 'Método rápido y eficaz en confinamiento',
      color: '#00c9ff'
    },
    {
      icon: '🦅',
      title: 'Control de Otros Vertebrados',
      description: 'Manejo de palomas, pájaros y murciélagos sin dañarlos',
      color: '#92fe9d'
    }
  ];

  const certificaciones = [
    '✓ Personal capacitado por entidades gubernamentales en el manejo integrado de plagas',
    '✓ Productos químicos de salud pública no nocivos para la salud humana',
    '✓ Certificados de manejo integrado en control de plagas con cada servicio',
    '✓ Fichas técnicas de los productos utilizados anexadas a cada servicio',
    '✓ Servicio personalizado acorde con las necesidades de cada cliente',
    '✓ Asesoría técnica de inspección, diagnóstico y planes de saneamiento',
    '✓ Garantía en cada uno de los servicios prestados',
    '✓ Cronograma de mantenimientos periódicos adaptado al cliente',
    '✓ Cumplimiento con la normatividad sanitaria y ambiental vigente'
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portafolio de Servicios</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Nuestro portafolio de servicios profesionales en el Manejo Integrado de Plagas (MIP)
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className="servicio-card"
              style={{ '--hover-color': servicio.color }}
            >
              <div className="servicio-icon" style={{ background: servicio.color }}>
                {servicio.icon}
              </div>
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
              <div className="servicio-hover-bg" style={{ background: servicio.color }}></div>
            </div>
          ))}
        </div>

        <div className="certificaciones-section">
          <div className="cert-header">
            <div className="cert-icon">🏆</div>
            <h3>Nuestras Certificaciones y Garantías</h3>
          </div>
          <div className="cert-grid">
            {certificaciones.map((cert, index) => (
              <div key={index} className="cert-item">
                <span className="cert-check">✓</span>
                <p>{cert.replace('✓ ', '')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h3>¿Por qué elegir a FUMIGAINSECTOS S.A.S.?</h3>
          <p>Ofrecemos un servicio personalizado con garantía, productos certificados y personal capacitado</p>
          <button 
            className="cta-button"
            onClick={() => window.open('https://wa.me/573172681857?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios', '_blank')}
          >
            <span>
              <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" style={{verticalAlign: 'middle'}}>
                <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.957 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.893 1.123-1.094 1.347c-0.201 0.227-0.401 0.255-0.747 0.081s-1.456-0.537-2.774-1.711c-1.026-0.913-1.719-2.042-1.919-2.389s-0.022-0.533 0.152-0.707c0.156-0.155 0.346-0.401 0.518-0.603 0.174-0.201 0.231-0.346 0.347-0.574 0.117-0.227 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.227 2.441 3.729 5.913 5.229 0.827 0.354 1.473 0.566 1.977 0.723 0.831 0.263 1.586 0.226 2.183 0.137 0.666-0.099 2.049-0.835 2.335-1.642 0.288-0.808 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.227-0.662-0.401z"></path>
              </svg>
            </span>
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
