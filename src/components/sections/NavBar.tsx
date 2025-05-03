import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary/90 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Shield className="w-8 h-8 text-primary mr-2" />
            <span className="text-xl font-bold">
              <span className="text-white">password</span>
              <span className="text-primary">.co</span>
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-white hover:text-primary transition-colors">Servicios</Link>
            <Link to="/nosotros" className="text-white hover:text-primary transition-colors">Nosotros</Link>
            <Link to="/contacto" className="px-4 py-2 bg-primary text-secondary rounded-md hover:bg-primary/80 transition-colors">Contacto</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-primary transition-colors">Inicio</Link>
              <Link to="/servicios" className="text-white hover:text-primary transition-colors">Servicios</Link>
              <Link to="/nosotros" className="text-white hover:text-primary transition-colors">Nosotros</Link>
              <Link to="/contacto" className="px-4 py-2 bg-primary text-secondary rounded-md hover:bg-primary/80 transition-colors text-center">Contacto</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;