import { works } from "../data/works.js";

const WorksSection = () => {
  return (
    <div>
      <div className="flex items-center p-20 justify-center flex-col">
        <h2 className="font-extrabold text-3xl mb-8 pt-3 text-center text-white uppercase">
          Why you should work with us
        </h2>
        <div className="mt-10 grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-black border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col"
            >
              <h3 className="font-semibold text-2xl text-indigo-700 mb-2 text-center">
                {work.title}
              </h3>
              <p className="text-white mb-4 text-center my-3 leading-8">
                {work.description}
              </p>
            </div>
          ))}
        </div>
        <section id="ourteam"></section>
      </div>
    </div>
  );
};

export default WorksSection;
