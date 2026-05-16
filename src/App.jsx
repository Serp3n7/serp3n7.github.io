import { Helmet, HelmetProvider } from 'react-helmet-async';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import Terminal from './components/Terminal';
import BugBounties from './components/BugBounties';
import Skills from './components/Skills';
import QuoteSection from './components/QuoteSection';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Sumit Bide – Cybersecurity Analyst & Penetration Tester | SERP3N7</title>
      <meta name="description" content="Cybersecurity analyst and penetration tester specializing in offensive security, red teaming, and infrastructure hardening. Home lab architect, bug bounty hunter, and Kali NetHunter kernel contributor." />
    </Helmet>

    <Background />
    <Header />

    <main>
      <Hero />
      <StatsBar />
      <AboutSection />

      <section id="work" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Terminal />
            <div className="space-y-6">
              <BugBounties />
              <Skills />
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Projects />
        </div>
      </section>

      <Footer />
    </main>
  </HelmetProvider>
);

export default App;
