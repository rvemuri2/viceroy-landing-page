import logo from "../assets/viceroy-transparent.png";
const HeroSection = () => {
  return (
    <section className="hero-section text-center mt-32 flex flex-col">
      <h1 className="text-4xl font-extrabold leading-[1.15] sm:text-6xl sm:leading text-white">
        Viceroy Business Development
        <br />
        <br />
        <span className="bg-gradient-to-r from-red-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent transition-opacity">
          Your Go to Market Engine
        </span>
      </h1>
      <br />
      <h2 className="mt-5 font-semibold text-gray-100 sm:text-xl">
        Empowering your business with tailored outbound strategies, ensuring
        meaningful connections and success-driven results every step of the way.
      </h2>
      <div className="mt-5 items-center justify-center">
        <img
          id="works"
          src={logo}
          alt="b2b"
          className="mx-auto max-h-[300px] sm:max-h-[500px]"
        />
      </div>
    </section>
  );
};
export default HeroSection;
