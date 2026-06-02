import { useEffect, useState } from 'react';

export default function Portofoliu() {
  const [proiecte, setProiecte] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://classic-growth-0878312446.strapiapp.com/api/proiects')
      .then(res => res.json())
      .then(data => {
        setProiecte(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Eroare la preluare:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 text-foreground">Se încarcă proiectele...</div>;

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
        {proiecte.length > 0 ? (
          proiecte.map((proiect) => (
            <div key={proiect.id} className="bg-card border border-border p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
              <h2 className="text-2xl font-bold text-foreground mb-4 font-serif">
                {proiect.Titlu || "Fără titlu"}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {proiect.Descriere || "Fără descriere"}
              </p>
              
              {/* Afișarea tehnologiilor ca bule separate */}
              <div className="flex flex-wrap gap-2">
                {proiect.Tehnologii?.split(',').map((tech, idx) => (
                  <span key={idx} className="bg-secondary/50 border border-secondary text-foreground text-sm font-semibold px-4 py-1.5 rounded-md">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-2 text-muted-foreground">Nu există proiecte publicate momentan în Strapi.</p>
        )}
      </div>
    </div>
  );
}