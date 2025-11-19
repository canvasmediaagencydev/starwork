import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
