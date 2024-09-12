const AboutUs = () => {
  return (
    <div id="aboutus" className="container mx-auto px-4 py-8">
      <h2 className="font-extrabold text-3xl mb-20 pt-20 text-center text-white uppercase">
        About Us
      </h2>
      <div className="flex flex-col justify-center lg:flex-row items-center mb-12">
        <div className="bg-black border border-gray-200 rounded-lg shadow-lg p-10 w-full max-w-3xl h-auto lg:w-3/4 lg:h-auto hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="text-3xl font-extrabold text-gray-200 leading-8 text-center">
            Our Mission
          </p>
          <p className="text-xl text-gray-400 mt-8 my-10 leading-10 text-center">
            Empowering businesses with precision-crafted outreach strategies
            that drive impactful first meetings and accelerate sales success.
          </p>
          <p className="text-base text-gray-500 mt-4 leading-8 text-center">
            Viceroy Business Development is a boutique outbound sales
            consultancy, specializing in top-of-funnel lead generation and
            go-to-market research. Founded with an emphasis on high quality
            outreach, Viceroy believes that a great first meeting sets the tone
            for the entire sales process, and that the initial touchpoint has a
            material effect on the likelihood of closing a deal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
