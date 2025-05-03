import HeroSection from '../components/sections/Hero';
import Navbar from '../components/sections/NavBar';
import Footer from '../components/sections/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        {/* Aquí puedes agregar más secciones según necesites */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;