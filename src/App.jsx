import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portofoliu from './pages/Portofoliu';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portofoliu" element={<Portofoliu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        
        <footer className="bg-card border-t border-border py-6 text-center font-sans text-muted-foreground text-sm">
          <p>© 2026 Echipa 25 - Informatică Economică. Toate drepturile rezervate.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;