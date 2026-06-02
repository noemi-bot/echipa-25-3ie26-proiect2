export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 animate-fade-in">
      <div className="bg-card text-card-foreground rounded-2xl shadow-lg border border-border p-8 md:p-12">
        
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">
          Contactați Echipa
        </h1>
        <p className="text-muted-foreground font-sans mb-8">
          Aveți întrebări despre proiectul nostru de la Informatică Economică? Completați formularul de mai jos și vă vom răspunde în cel mai scurt timp.
        </p>

        
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 font-sans">
          
          
          <input type="hidden" name="access_key" value="b87c63cb-7320-4057-9dbf-f210bab57d7e" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="nume" className="mb-2 text-sm font-semibold">Nume complet</label>
              <input 
                type="text" 
                id="nume" 
                name="name" 
                className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="Ex: Popescu Ion"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-semibold">Adresă de e-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="adresa@exemplu.ro"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="mesaj" className="mb-2 text-sm font-semibold">Mesajul dumneavoastră</label>
            <textarea 
              id="mesaj" 
              name="message" 
              rows="5"
              className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              placeholder="Scrieți mesajul aici..."
              required
            ></textarea>
          </div>

          
          <button 
            type="submit" 
            className="w-full md:w-auto bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            Trimite Mesajul
          </button>
          
        </form>
      </div>
    </div>
  );
}