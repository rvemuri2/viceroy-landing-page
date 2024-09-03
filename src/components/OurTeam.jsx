import max from "../assets/max-simpson.jpeg";

const OurTeam = () => {
  return (
    <section>
      <h2 className="font-extrabold text-3xl mb-20 pt-20 text-center text-white uppercase">
        Our Team
      </h2>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-40">
          <div className="relative flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-120 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl">
              <img
                src={max}
                alt="Max Simpson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-extrabold leading-snug tracking-normal text-white">
                Max Simpson
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Odio
                suscipit sem consectetur dis adipiscing torquent erat praesent.
                Curabitur proin velit tincidunt odio in vitae. Cras vel sagittis
                non sit, amet leo mus. Commodo egestas fames natoque cubilia
                amet ad. Proin faucibus sociosqu conubia integer efficitur ante.
                Ligula porttitor lobortis eget taciti tempus montes eget
                penatibus. Quis purus accumsan fames varius imperdiet inceptos
                erat.
              </p>
            </div>
            <div className="p-6 pt-0"></div>
          </div>

          {/* Second Card */}
          <div className="relative flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-120 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl">
              <img
                src={max}
                alt="Max Simpson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-extrabold leading-snug tracking-normal text-white">
                Max Simpson
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Odio
                suscipit sem consectetur dis adipiscing torquent erat praesent.
                Curabitur proin velit tincidunt odio in vitae. Cras vel sagittis
                non sit, amet leo mus. Commodo egestas fames natoque cubilia
                amet ad. Proin faucibus sociosqu conubia integer efficitur ante.
                Ligula porttitor lobortis eget taciti tempus montes eget
                penatibus. Quis purus accumsan fames varius imperdiet inceptos
                erat.
              </p>
            </div>
            <div className="p-6 pt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
