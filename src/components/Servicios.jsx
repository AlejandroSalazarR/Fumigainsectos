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
    '✓ Cronograma de mantenimientos periódicos adaptado al cliente',
    '✓ Implementamos un esquema de control integral en dos fases: una intervención principal y una aplicación de refuerzo gratuito a los 15 días para erradicar cualquier nuevo ciclo de la plaga.',
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
      </div>
    </section>
  );
};

export default Servicios;
