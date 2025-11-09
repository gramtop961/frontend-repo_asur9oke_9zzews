import React from 'react';
import { Megaphone, Camera, Shirt, PenTool, Code } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Social Media Specialist',
    desc: 'Strategy, content, and campaigns that grow engaged communities across platforms.',
  },
  {
    icon: Camera,
    title: 'Photo & Video Production',
    desc: 'Product shoots, commercials, and edits that tell compelling visual stories.',
  },
  {
    icon: Shirt,
    title: 'Apparel Production',
    desc: 'Design-to-delivery merch: screen print, embroidery, labels, and packaging.',
  },
  {
    icon: PenTool,
    title: 'Branding & Design',
    desc: 'Logos, guidelines, and full brand systems with sharp, modern aesthetics.',
  },
  {
    icon: Code,
    title: 'Static Web Build',
    desc: 'Fast, SEO-friendly sites with clean code and thoughtful UX/UI.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-sky-50/60 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">Our Services</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Everything you need to launch and grow</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition">Get a proposal</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-xl transition shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-700 dark:text-sky-400">
                Learn more
                <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
