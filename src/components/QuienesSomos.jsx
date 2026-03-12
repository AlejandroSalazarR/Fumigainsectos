import { useState, useEffect } from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const valores = [
    { icon: '⚡', title: 'EFICIENCIA', description: 'Soluciones efectivas con productos de calidad' },
    { icon: '📚', title: 'CONOCIMIENTO', description: 'Personal certificado y capacitado' },
    { icon: '💚', title: 'HONESTIDAD', description: 'Transparencia y confianza' },
    { icon: '🏆', title: 'CALIDAD', description: 'Servicio efectivo garantizado' },
    { icon: '🤝', title: 'RESPETO', description: 'Prioridad al cliente' },
    { icon: '💬', title: 'COMUNICACIÓN', description: 'Diálogo y acompañamiento permanente' },
    { icon: '👥', title: 'TRABAJO EN EQUIPO', description: 'Eficiencia y productividad' },
    { icon: '✨', title: 'SERVICIO', description: 'Responsabilidad con cada cliente' }
  ];

  useEffect(() => {
    if (!isAutoScroll) return;
    
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        // Avanzar de 4 en 4, y volver al inicio después del último grupo
        const nextPosition = prev + 4;
        return nextPosition >= valores.length ? 0 : nextPosition;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoScroll, valores.length]);

  const handleValorClick = (index) => {
    setScrollPosition(index);
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 5000);
  };

  return (
    <section id="quienes-somos" className="quienes-somos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Quiénes Somos</h2>
          <div className="title-underline"></div>
        </div>

        {/* Carrusel de Valores al inicio */}
        <div className="valores-carousel-section">
          <h3 className="valores-main-title">Nuestros Valores</h3>
          <div className="valores-carousel">
            <div 
              className="valores-track"
              style={{ transform: `translateX(-${scrollPosition > 0 ? 50 : 0}%)` }}
            >
              {valores.map((valor, index) => (
                <div 
                  key={index} 
                  className="valor-item"
                  onClick={() => handleValorClick(index)}
                >
                  <div className="valor-front">
                    <div className="valor-icon-large">{valor.icon}</div>
                    <h4 className="valor-title-large">{valor.title}</h4>
                  </div>
                  <div className="valor-back">
                    <p>{valor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {[0, 4].map((index) => (
              <button
                key={index}
                className={`dot ${scrollPosition === index ? 'active' : ''}`}
                onClick={() => handleValorClick(index)}
                aria-label={`Ir al grupo ${(index / 4) + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="content-grid">
          <div className="content-text">
            <div className="company-badge">
              <div className="badge-icon">🏢</div>
              <div className="badge-info">
                <h3>FUMIGAINSECTOS S.A.S.</h3>
                <p className="nit">NIT: 902.033.262-7</p>
              </div>
            </div>

            <p className="intro-text">
              Somos una empresa de manejo integrado de plagas constituida en la ciudad de Medellín.
              Brindamos soluciones seguras, profesionales y de alta calidad,
              adaptándonos a las necesidades de nuestros clientes en el hogar, el comercio,
              la industria y el sector salud, hoteles, restaurantes, instituciones educativas,
              entre otros.
            </p>

            <p className="highlight-text">
              Nuestro objetivo fundamental es ofrecer el mejor servicio con calidad, utilizando 
              <strong> productos químicos de salud pública que contribuyen al cuidado del medio 
              ambiente</strong>, contamos con un grupo de profesionales certificados por entidades 
              gubernamentales en el manejo y aplicación de productos químicos.
            </p>

            <div className="experience-box">
              <div className="exp-number">✓</div>
              <div className="exp-text">
                <h4>Servicio Profesional</h4>
                <p>Brindando soluciones integrales en manejo integrado de plagas con productos de salud pública.</p>
              </div>
            </div>

            <div className="certifications">
              <h4>✓ Personal capacitado por entidades gubernamentales</h4>
              <h4>✓ Productos químicos de salud pública certificados</h4>
              <h4>✓ Para asegurar un control de plagas verdaderamente efectivo, nuestro protocolo incluye un tratamiento de refuerzo gratuito programado 15 días después del servicio inicial.</h4>
            </div>
          </div>

          <div className="mision-vision">
            <div className="card mission-card">
              <div className="card-icon">🎯</div>
              <h3>Misión</h3>
              <p>
                FUMIGAINSECTOS S.A.S. es una empresa experta en el servicio de manejo 
                integrado de plagas en salud pública, nuestro objetivo primordial es 
                satisfacer las necesidades de nuestros clientes brindándoles un servicio 
                con calidad y efectividad.
              </p>
            </div>

            <div className="card vision-card">
              <div className="card-icon">🔭</div>
              <h3>Visión</h3>
              <p>
                FUMIGAINSECTOS S.A.S. es una empresa líder en el servicio de manejo 
                integrado de plagas en salud pública, ofreciéndoles un servicio de 
                calidad a un precio competitivo que nos permita crecer y mejorar la 
                calidad de vida de nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="politica-section">
          <h3>Nuestro Compromiso</h3>
          <p>
            Para FUMIGAINSECTOS S.A.S. nuestros clientes son muy importantes, por lo tanto; 
            nuestro objetivo es identificar el problema de plagas y controlarlo en el menor 
            tiempo posible, para lograr que nuestros clientes estén satisfechos con los 
            resultados obtenidos. La empresa se centra en proteger la salud y el bienestar 
            de las personas, controlando eficazmente las plagas que puedan representar una 
            amenaza, su compromiso con la seguridad, la calidad y sostenibilidad de ambientes 
            saludables y libres de plagas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
