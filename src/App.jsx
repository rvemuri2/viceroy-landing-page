import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorksSection from "./components/WorksSection";
function App() {
  return (
    <>
      {/* Background Layer Container */}
      <div className="w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none bg-beige">
        {/* Light Grid Background */}
        <div className="absolute inset-0 bg-[url('./assets/grid.svg')] opacity-5 mix-blend-overlay"></div>

        {/* Additional Decorative Elements */}
        <img
          src="./assets/mesh.svg"
          className="opacity-15 absolute bottom-1 h-[600px] z-10"
          alt="Mesh"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        <Navbar />
        <div className="container mx-auto">
          <HeroSection />
          <WorksSection />
        </div>
      </div>
    </>
  );
}

export default App;
