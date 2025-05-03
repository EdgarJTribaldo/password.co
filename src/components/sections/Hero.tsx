import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Key, Code, Server, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const securityPhrases = [
    "Protegemos su información",
    "Prevenimos fraudes",
    "Cumplimiento normativo",
    "Seguridad digital integral"
  ];
  
  useEffect(() => {
    if (isTyping) {
      const phrase = securityPhrases[currentPhraseIndex];
      if (animatedText.length < phrase.length) {
        const timer = setTimeout(() => {
          setAnimatedText(phrase.substring(0, animatedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (animatedText.length > 0) {
        const timer = setTimeout(() => {
          setAnimatedText(animatedText.substring(0, animatedText.length - 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % securityPhrases.length);
      }
    }
  }, [animatedText, isTyping, currentPhraseIndex]);

  const SecurityIcon = ({ index, className }: { index: number, className: string }) => {
    const icons = [
      <Shield className={className} key="shield" />,
      <Lock className={className} key="lock" />,
      <Key className={className} key="key" />,
      <Code className={className} key="code" />,
      <Server className={className} key="server" />,
      <Eye className={className} key="eye" />
    ];
    return icons[index % icons.length];
  };

  // Crear un array de índices para el mapeo
  const gridItems = Array.from({ length: 64 }, (_, i) => i);
  const floatingItems = Array.from({ length: 15 }, (_, i) => i);
  const particleItems = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen pb-10">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-5">
        {gridItems.map((i) => (
          <div key={i} className="flex items-center justify-center">
            <SecurityIcon index={i} className="w-12 h-12" />
          </div>
        ))}
      </div>
    
      {/* Floating security elements - Reducidos en móvil */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingItems.map((i) => {
          const size = (Math.floor(Math.random() * 24) + 16) > 20 ? 8 : 6;
          const duration = Math.floor(Math.random() * 20) + 15;
          const delay = Math.floor(Math.random() * 5);
          const positionX = Math.floor(Math.random() * 100);
          const positionY = Math.floor(Math.random() * 100);
          
          return (
            <div 
              key={i}
              className={`absolute opacity-10 w-${size} h-${size} hidden md:block`}
              style={{
                left: `${positionX}%`,
                top: `${positionY}%`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`
              }}
            >
              <SecurityIcon index={i} className="w-full h-full" />
            </div>
          );
        })}
      </div>
      
      {/* Main content - Ajustado para móvil con paddingTop adicional */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-screen text-center pt-20 md:pt-16">
        {/* Ajuste de espacio para tener en cuenta el navbar en móvil */}
        <div className="mt-16 md:mt-0"></div>
        
        <div className="flex items-center justify-center">
          <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary mr-2 md:mr-3" />
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter">
            <span className="text-white">password</span>
            <span className="text-primary">.co</span>
          </h1>
        </div>
        
        <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl font-light max-w-3xl px-2">
          Su aliado especializado en<br/>
          <span className="relative">
            <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary to-blue-300 opacity-25 rounded"></span>
            <span className="relative text-primary font-medium"> seguridad digital</span>
          </span>
        </p>
        
        <div className="h-12 md:h-16 mt-4">
          <p className="text-lg md:text-xl lg:text-3xl font-light text-primary min-h-8">
            <span className="inline-block w-1 h-6 bg-primary ml-1 animate-pulse"></span> {animatedText}
          </p>
        </div>
        
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center gap-3 md:gap-4 px-4">
          <div className="group w-full md:w-auto">
            <Link to="/contacto" className="w-full md:w-auto px-6 md:px-8 py-3 bg-primary text-secondary rounded-md flex items-center justify-center md:justify-start transform transition-all hover:scale-105 hover:bg-blue-600">
              <Lock className="w-5 h-5 mr-2" /> 
              Contáctanos
            </Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-primary mt-1 transition-all duration-300"></div>
          </div>
          
          <div className="group w-full md:w-auto mt-3 md:mt-0">
            <Link to="/servicios" className="w-full md:w-auto px-6 md:px-8 py-3 bg-transparent border border-primary text-white rounded-md flex items-center justify-center md:justify-start transform transition-all hover:scale-105 hover:bg-primary/10">
              <Eye className="w-5 h-5 mr-2" /> 
              Conoce más
            </Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-primary mt-1 transition-all duration-300"></div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl px-2">
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
            <div className="flex justify-center mb-3 md:mb-4">
              <RefreshCw className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:animate-spin" />
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">Transformación Digital</h3>
            <p className="text-gray-300 text-xs md:text-sm">Descubre cómo podemos llevar a tu empresa a la era digital con soluciones innovadoras.</p>
            <div className="mt-3 md:mt-4">
              <Link to="/transformacion-digital" className="text-primary text-sm font-medium flex items-center justify-center">
                VER MÁS <Eye className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group mt-4 md:mt-0">
            <div className="flex justify-center mb-3 md:mb-4">
              <Server className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:animate-pulse" />
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">SOC</h3>
            <p className="text-gray-300 text-xs md:text-sm">Descubre cómo nuestro Centro de Operaciones de Seguridad trabaja para garantizar la protección continua.</p>
            <div className="mt-3 md:mt-4">
              <Link to="/soc" className="text-primary text-sm font-medium flex items-center justify-center">
                VER MÁS <Eye className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group mt-4 md:mt-0">
            <div className="flex justify-center mb-3 md:mb-4">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:rotate-12 transition-all" />
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">ISO Virtual</h3>
            <p className="text-gray-300 text-xs md:text-sm">Inicia tu camino hacia la certificación ISO con nuestro servicio personalizado.</p>
            <div className="mt-3 md:mt-4">
              <Link to="/iso-virtual" className="text-primary text-sm font-medium flex items-center justify-center">
                VER MÁS <Eye className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Digital particles - Reducidos en móvil */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center">
          <div className="w-24 md:w-32 h-6 md:h-8">
            {particleItems.map((i) => (
              <div 
                key={i} 
                className="absolute w-1 h-1 bg-primary rounded-full" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${1 + Math.random() * 2}s infinite ${Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Estilos para la animación - Agregado aquí para que funcione correctamente */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(2);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;