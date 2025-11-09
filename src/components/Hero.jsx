import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Kardus Labs
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black/70 dark:text-white/70">
              A modern creative studio crafting social, visuals, apparel, brands, and fast static websites.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#services" className="rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition">Explore Services</a>
              <a href="#contact" className="rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition">Start a Project</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 dark:from-neutral-950 dark:to-neutral-900/40" />
    </section>
  );
};

export default Hero;
