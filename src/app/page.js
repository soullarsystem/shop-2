// page.js
import HeroSection from './components/HeroSection';
import Catalog from './components/Catalog';
import Photos from './components/Photos';
import Footer from './components/Footer';


function HomePage() {
  return (
    <>
      <HeroSection />
      <Catalog />
      <Photos/>
      <Footer />
    </>
  );
}
export default HomePage;