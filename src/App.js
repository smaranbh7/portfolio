import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="sm:pb-9">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <StatusBar />
    </div>
  );
}

export default App;
