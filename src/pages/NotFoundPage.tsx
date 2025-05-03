import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-white p-4">
      <Shield className="w-16 h-16 text-primary mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl mb-8">Página no encontrada</p>
      <Link 
        to="/" 
        className="px-6 py-2 bg-primary text-secondary rounded-md font-medium hover:bg-primary/80 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;