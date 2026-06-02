import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-border shadow-md" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif font-bold text-primary tracking-wide">Echipa 25</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-sans">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Căutare..." 
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <Link to="/" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Acasă</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Despre Noi</Link>
            <Link to="/portofoliu" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Portofoliu</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Contact</Link>
            
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-3 bg-secondary text-secondary-foreground rounded-md hover:opacity-80 transition flex items-center justify-center border border-border"
            >
              Mod Afisare
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}