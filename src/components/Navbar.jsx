import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Logică scroll: ascunde bara la scroll down, arată la scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  // Logică Dark Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] border-b border-border shadow-sm transition-transform duration-300 ease-in-out backdrop-blur-lg ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundColor: 'color-mix(in srgb, var(--background) 85%, transparent)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-serif font-bold text-primary tracking-wide">Echipa 25</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-sans">
              <Link to="/" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Acasă</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Despre Noi</Link>
              <Link to="/portofoliu" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Portofoliu</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Contact</Link>
              
              <button 
                onClick={() => setIsDark(!isDark)} 
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-80 transition font-medium border border-border"
              >
                {isDark ? "Mod Luminos" : "Mod Intunecat"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none p-2 border border-border rounded-md">
                {isOpen ? "Inchide" : "Meniu"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-b border-border backdrop-blur-lg" style={{ backgroundColor: 'var(--background)' }}>
            <div className="px-4 py-6 space-y-4 font-sans">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Acasă</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Despre Noi</Link>
              <Link to="/portofoliu" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Portofoliu</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer */}
      <div className="h-20 w-full"></div>
    </>
  );
}