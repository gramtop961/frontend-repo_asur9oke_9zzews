import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span>Kardus Labs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-sky-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition">Get a Quote</a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
