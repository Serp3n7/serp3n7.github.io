import { Helmet, HelmetProvider } from 'react-helmet-async';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import Terminal from './components/Terminal';
import BugBounties from './components/BugBounties';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Sumit Bide – Cybersecurity Analyst | SERP3N7</title>
      <meta name="description" content="Cybersecurity analyst specializing in offensive security, red teaming, and infrastructure hardening. Home lab architect, bug bounty hunter, and Kali NetHunter kernel contributor." />
    </Helmet>

    <Background />
    <Header />

    <main>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <ProfileCard />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <Terminal />
            <BugBounties />
            <Skills />
          </div>
        </div>

        <div className="mt-12">
          <Projects />
        </div>

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </main>
  </HelmetProvider>
);

export default App;
