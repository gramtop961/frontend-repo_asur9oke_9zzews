import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-sky-50/60 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">Contact</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Tell us about your idea</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">We’ll get back within 1–2 business days with next steps and an initial estimate.</p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@karduslabs.com</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> +62 812-3456-7890</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Project details</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              <Send className="h-4 w-4" /> Send message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-600">Thanks! We’ll be in touch shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
