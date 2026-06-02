export default function Portofoliu() {
  const proiecte = [
    {
      titlu: "Integrare Sisteme CMS",
      descriere: "Arhitectură decuplată (Headless) utilizând React pe partea de client și Strapi pentru managementul avansat al conținutului.",
      tehnologii: ["React", "Strapi", "API REST"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    {
      titlu: "Automatizarea Fluxurilor Financiare",
      descriere: "Implementarea agenților inteligenți n8n pentru procesarea documentelor fiscale, validarea datelor și generarea alertelor de conformitate.",
      tehnologii: ["n8n", "RPA", "SQL"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
      titlu: "Modelare de Business Complexă",
      descriere: "Elaborarea planurilor de afaceri, a matricilor SWOT și a Canvas-urilor pentru strategii digitale aplicate companiilor multinaționale.",
      tehnologii: ["Analiză Financiară", "Strategie"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6zM12 4.5A7.5 7.5 0 0119.5 12h-7.5V4.5z" /></svg>
    },
    {
      titlu: "Dezvoltare Platforme Web",
      descriere: "Crearea de aplicații interactive full-stack bazate pe stiva tehnologică PHP și MySQL, optimizate pentru performanță.",
      tehnologii: ["PHP", "MySQL", "Tailwind"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
    }
  ];

  import { useEffect, useState } from 'react';

export default function Portofoliu() {
  const [proiecte, setProiecte] = useState([]);

  useEffect(() => {
    fetch('https://classic-growth-0878312446.strapiapp.com/api/proiects')
      .then(res => res.json())
      .then(res => setProiecte(res.data)) 
      .catch(err => console.error("Eroare:", err));
  }, []);

 
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 animate-fade-in font-sans">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-primary mb-6">
          Portofoliu Academic
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Prezentăm rezultatele tehnice și analitice obținute în cadrul departamentului de Informatică Economică, evidențiind capacitatea noastră de a rezolva cerințe complexe de business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {proiecte.map((proiect) => (
  <div key={proiect.id} className="bg-card border border-border p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
    
    <div className="text-primary mb-6 transform group-hover:-translate-y-1 transition-transform">
      
    </div>
    
    <h2 className="text-2xl font-bold text-foreground mb-4 font-serif">
      {proiect.attributes.Titlu}
    </h2>
    <p className="text-muted-foreground mb-8 leading-relaxed">
      {proiect.attributes.Descriere}
    </p>
    
    <div className="flex flex-wrap gap-2">
      
      <span className="bg-secondary/50 border border-secondary text-foreground text-sm font-semibold px-4 py-1.5 rounded-md">
        {proiect.attributes.Tehnologii}
      </span>
    </div>
  </div>
))}
      </div>
    </div>
  );
}}