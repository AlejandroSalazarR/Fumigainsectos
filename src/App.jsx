import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Plagas from './components/Plagas';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Servicios />
      <Plagas />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
