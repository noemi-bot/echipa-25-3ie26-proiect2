
<div className="hidden md:flex items-center space-x-8 font-sans">
  
  
  <div className="relative">
    <input 
      type="text" 
      placeholder="Căutare..." 
      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
    />
  </div>

  
  <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Acasă</Link>
  <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">Despre Noi</Link>
  <Link to="/portofoliu" className="text-foreground hover:text-primary transition-colors font-medium">Portofoliu</Link>
  <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</Link>
            
  
  <button onClick={() => setIsDark(!isDark)} className="...">
    
  </button>
</div>