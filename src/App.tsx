import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OneRideCaseStudy } from './pages/OneRideCaseStudy';

function HomePage() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add metadata for SEO
    document.title = 'Koushika M - UI/UX Designer Portfolio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Portfolio of Koushika M, UI/UX & Graphic Designer focused on user-centered interfaces, usability, and practical digital design solutions.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="fx-aurora fx-float-slow" />
        <div className="fx-grain" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/one-ride" element={<OneRideCaseStudy />} />
    </Routes>
  );
}
