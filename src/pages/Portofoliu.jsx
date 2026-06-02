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
}