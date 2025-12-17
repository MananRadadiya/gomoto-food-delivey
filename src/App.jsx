import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './Navbar';
import Hero from './Hero';
import Popular from './Popular';
import SecondSection from './SecondSection';
import CafeRestaurant from './CafeRestaurant';
import Testimonials from './Testimonials';
import DownloadApp from './DownloadApp';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Popular />
      <SecondSection />
      <CafeRestaurant />
      <Testimonials/>
      <DownloadApp/>
      <Footer />
    </div>
  );
}

export default App;
