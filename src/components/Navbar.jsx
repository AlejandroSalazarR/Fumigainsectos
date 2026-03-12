import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('inicio')}>
          <div className="logo-circle">
            <span className="logo-text">F</span>
          </div>
          <div className="logo-info">
            <h2>FUMIGAINSECTOS</h2>
            <p>S.A.S. - NIT: 902.033.262-7</p>
          </div>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('quienes-somos')}>Quiénes Somos</button></li>
          <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
          <li><button onClick={() => scrollToSection('plagas')}>Plagas</button></li>
          <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
        </ul>

        <div className="navbar-contact">
          <a href="tel:+573172681857" className="contact-phone">
            📞 317-268-18-57
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
