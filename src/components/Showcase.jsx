import React from 'react';

const projects = [
  {
    name: 'Aether Apparel',
    tag: 'Branding • Apparel Production',
    img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Pulse Energy',
    tag: 'Static Web • Branding',
    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Neon Lens',
    tag: 'Photo & Video',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1400&auto=format&fit=crop',
  },
];

const Showcase = () => {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">Selected Work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Recent projects we loved building</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-black/60 dark:text-white/60">{p.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
