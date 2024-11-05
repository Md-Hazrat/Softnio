import Book from "./components/Book/Book";
import CardSlider from "./components/CardSlider/CardSlider";
import Footer from "./components/Foooter/Footer";
import { Hero } from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Navabe from "./components/Navbar/Navabe";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <header>
        <Navabe />
      </header>
      <main>
        <Hero />
        <Info />
        <CardSlider />
        <Book />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
