import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorksSection from "./components/WorksSection";
import OurTeam from "./components/OurTeam";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        <div className="absolute inset-0 bg-[url('./assets/grid.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20">
        <Navbar />
        <div className="container mx-auto">
          <HeroSection />
          <WorksSection />
          <OurTeam />
          <AboutUs />
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
