import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gameplay from './components/Gameplay';
import GreenEnergy from './components/GreenEnergy';
import WorldSection from './components/WorldSection';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Business from './components/Business';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

export default function App() {
  return (
    <div>
      <IntroLoader />
      <Navbar />
      <main className="site-main">
        <Hero />
        <About />
        <Gameplay />
        <GreenEnergy />
        <WorldSection />
        <Gallery />
        <Team />
        <Business />
        <Community />
        <CTA />
        <div className="footer-reveal" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}