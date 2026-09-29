import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import Capabilities from './components/Capabilities';
import BugBounties from './components/BugBounties';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LiquidBackdrop from './components/LiquidBackdrop';
import { Reveal } from './hooks/Reveal';

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Sumit Bide | Cybersecurity Analyst &amp; Penetration Tester | SERP3N7</title>
      <meta
        name="description"
        content="Penetration tester and cybersecurity analyst. Vulnerability assessment, red teaming, and infrastructure hardening. Defence, reimagined."
      />
    </Helmet>

    <LiquidBackdrop />
    <Header />

    <main>
      <Hero />
      <StatsBar />
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <Capabilities />
      </Reveal>

      <Reveal>
        <section
          aria-label="Disclosures and skills"
          className="py-24 md:py-32"
        >
          <div className="mx-auto max-w-content px-4 md:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <BugBounties />
              </div>
              <div className="lg:col-span-7">
                <Skills />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section aria-label="Work" className="pb-24 md:pb-32">
          <div className="mx-auto max-w-content px-4 md:px-8">
            <Projects />
          </div>
        </section>
      </Reveal>
    </main>

    <Footer />
  </HelmetProvider>
);

export default App;