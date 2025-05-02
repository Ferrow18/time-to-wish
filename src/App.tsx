import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
