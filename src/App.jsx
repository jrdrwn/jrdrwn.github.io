import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HireMe from './components/layout/HireMe';
import Statistics from './components/layout/Statistics';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <About />
      <HireMe />
      <Contact />
      <Footer />
    </>
  );
}
