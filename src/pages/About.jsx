export default function About() {
  const teamMembers = [
    { name: "Noemi Maugeri", role: "Software Developer & RPA", initials: "NM" },
    { name: "Cristina Chirila", role: "Database Administrator", initials: "CC" },
    { name: "Larisa Ciuboaru", role: "Systems Integration", initials: "LC" },
    { name: "Cristiana Drughi", role: "Business Analyst", initials: "CD" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 animate-fade-in">
      <section className="bg-card border border-border rounded-3xl p-10 md:p-16 shadow-sm mb-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Despre Echipa Noastră
          </h1>
          <div className="text-lg text-foreground font-sans space-y-6 leading-relaxed">
            <p>
              Suntem un grup de studente în anul terminal la <strong>Facultatea de Economie și de Administrare a Afacerilor</strong>, specializarea <strong>Informatică Economică</strong>.
            </p>
            <p>
              Proiectul de față reprezintă o sinteză a competențelor dobândite pe parcursul studiilor, integrând cunoștințe de programare web, managementul bazelor de date și optimizarea proceselor prin intermediul agenților inteligenți.
            </p>
            <div className="bg-secondary/30 border-l-4 border-primary p-4 mt-6">
              <p className="text-muted-foreground text-sm italic">
                * Conținutul detaliat va fi preluat dinamic prin intermediul Strapi Headless CMS, conform cerințelor arhitecturale ale laboratoarelor viitoare. *
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>
          </div>
        </div>
      </section>

      <section className="font-sans">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
          Structura Echipei
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-8 bg-background border border-border rounded-2xl hover:border-primary hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-secondary text-primary font-serif font-bold rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-foreground text-center mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm font-medium text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}