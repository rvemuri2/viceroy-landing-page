import max from "../assets/max-simpson.jpeg";
import deng from "../assets/deng_phua.jpg";

const OurTeam = () => {
  return (
    <section>
      <h2
        className="font-extrabold text-3xl mb-20 pt-20 text-center text-white uppercase"
        id="ourteam"
      >
        Our Team
      </h2>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-40">
          <div className="relative flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-96 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl">
              <img
                src={max}
                alt="Max Simpson"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-extrabold leading-snug tracking-normal text-white text-center">
                Max Simpson
              </h5>
              <p className="block font-sans text-base antialiased font-light text-inherit my-3 leading-8 text-center text-white">
                Max approaches sales from a technical lens. After spending
                several years as a software engineer, Max understands how to
                translate difficult technical concepts into salient outreach,
                ensuring that he trains his team to pitch highly technical
                products and get those products in front of the niche personas
                that can properly evaluate them.
              </p>
            </div>
            <div className="p-6 pt-0"></div>
          </div>

          <div className="relative flex flex-col text-gray-100 bg-black shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-96 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl">
              <img
                src={deng}
                alt="Deng Phua"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-extrabold leading-snug tracking-normal text-white text-center">
                Deng Phua
              </h5>
              <p className="block font-sans text-base antialiased font-light text-inherit my-3 leading-8 text-center text-white">
                Deng Phua (Don Pearlman) has an extensive career in business
                development in the technology and SaaS industries. He has
                personally proved out cold calling as a viable, and strong
                method of executing on countless companies’ GTM initiatives. He
                has trained countless Sales Development Executives for various
                businesses and believes that the age of AI and automation in
                today’s cold outreach paves the way for a new era of human
                connection and communication.
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
