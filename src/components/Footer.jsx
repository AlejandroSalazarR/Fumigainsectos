import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna 1: Información de la empresa */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-text">F</span>
              </div>
              <div className="logo-info">
                <h3>FUMIGAINSECTOS</h3>
                <p>S.A.S.</p>
              </div>
            </div>
            <p className="footer-description">
              Empresa especializada en el Manejo Integrado de Plagas en salud pública. Comprometidos con la calidad y el 
              medio ambiente.
            </p>
            <div className="footer-nit">
              <strong>NIT:</strong> 902.033.262-7
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
              <li><button onClick={() => scrollToSection('quienes-somos')}>Quiénes Somos</button></li>
              <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
              <li><button onClick={() => scrollToSection('plagas')}>Plagas</button></li>
            </ul>
          </div>

          {/* Columna 3: Oficina Medellín */}
          <div className="footer-section">
            <h4>Oficina Medellín</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Dirección:</strong>
                  <p>Carrera 45 N° 92-21 <br/>Oficina 401<br/>Barrio Aranjuez<br/>Medellín - Antioquia</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Teléfono:</strong>
                  <p><a href="tel:+576043852385">604 385 2385</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: Horario y Contacto */}
          <div className="footer-section">
            <h4>Horario de Servicio</h4>
            <div className="schedule">
              <div className="schedule-item">
                <strong>Lunes a Viernes:</strong>
                <p>8:00 a.m. - 6:00 p.m.</p>
              </div>
              <div className="schedule-item">
                <strong>Sábados:</strong>
                <p>8:00 a.m. - 12:00 m.</p>
              </div>
            </div>

            <div className="contact-buttons">
              <a 
                href="https://wa.me/573172681857?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-btn whatsapp"
              >
                <span>
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" style={{verticalAlign: 'middle'}}>
                    <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.957 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.893 1.123-1.094 1.347c-0.201 0.227-0.401 0.255-0.747 0.081s-1.456-0.537-2.774-1.711c-1.026-0.913-1.719-2.042-1.919-2.389s-0.022-0.533 0.152-0.707c0.156-0.155 0.346-0.401 0.518-0.603 0.174-0.201 0.231-0.346 0.347-0.574 0.117-0.227 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.227 2.441 3.729 5.913 5.229 0.827 0.354 1.473 0.566 1.977 0.723 0.831 0.263 1.586 0.226 2.183 0.137 0.666-0.099 2.049-0.835 2.335-1.642 0.288-0.808 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.227-0.662-0.401z"></path>
                  </svg>
                </span>
                317-268-18-57
              </a>
              <a 
                href="https://wa.me/573177901350?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn phone"
              >
                <span>📱</span>
                317-790-13-50
              </a>
              <a 
                href="mailto:serviciosfumigainsectossas@gmail.com"
                className="contact-btn email"
              >
                <span>✉️</span>
                serviciosfumigainsectossas@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} FUMIGAINSECTOS S.A.S. 
              Todos los derechos reservados.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-certifications">
        <p>✓ Personal Capacitado | ✓ Productos Ecológicos</p>
      </div>
    </footer>
  );
};

export default Footer;
