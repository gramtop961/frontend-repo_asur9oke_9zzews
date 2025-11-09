import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Kardus Labs. All rights reserved.</p>
          <div className="text-sm opacity-70">Tech, playful, modern — built with love.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
