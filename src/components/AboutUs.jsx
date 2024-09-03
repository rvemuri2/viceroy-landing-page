const AboutUs = () => {
  return (
    <div id="aboutus" className="container mx-auto px-4 py-8">
      <h2 className="font-extrabold text-3xl mb-20 pt-20 text-center text-white uppercase">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <img
          className="w-full lg:w-1/2 h-auto"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg"
          alt="Our Mission"
        />
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
          <p className="text-3xl font-extrabold text-gray-800">Our Mission</p>
          <p className="text-xl text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
