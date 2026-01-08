import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Activites from './pages/Activites';
import Reservations from './pages/Reservations';
import Boutique from './pages/Boutique';
import Trajet from './pages/Trajet';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil />;
      case 'activites':
        return <Activites />;
      case 'reservations':
        return <Reservations />;
      case 'boutique':
        return <Boutique />;
      case 'trajet':
        return <Trajet />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
