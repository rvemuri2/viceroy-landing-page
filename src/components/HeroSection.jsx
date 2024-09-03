import b2b from "../assets/b2bagency.webp";
const HeroSection = () => {
  return (
    <section className="hero-section text-center mt-32 flex flex-col">
      <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading">
        Viceroy Business Development
        <br />
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent transition-opacity">
          Your Go to Market Engine
        </span>
      </h1>
      <br />
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Placeholder text, this will be a one line summary about Viceroy in
        general (This is not to replace the about me section).
      </h2>
      <div className="mt-5 items-center justify-center">
        <img
          src={b2b}
          alt="b2b"
          className="mx-auto max-h-[300px] sm:max-h-[500px]"
        />
      </div>
    </section>
  );
};
export default HeroSection;
