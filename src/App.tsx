import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-100 transition-colors duration-300">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
