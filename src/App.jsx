import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Galleries from './pages/Galleries';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import i18next from 'i18next';

function App() {
  useEffect(() => {
    const handleDirection = () => {
      const currentLang = i18next.language;
      const direction = currentLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
    };

    handleDirection();
    i18next.on('languageChanged', handleDirection);

    return () => {
      i18next.off('languageChanged', handleDirection);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
