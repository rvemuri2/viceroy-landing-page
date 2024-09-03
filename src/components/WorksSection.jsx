import { works } from "../data/works.js";

const WorksSection = () => {
  return (
    <div className="flex items-center p-10 justify-center flex-col">
      <h2 className="font-extrabold text-3xl mb-8 pt-3 text-center text-white uppercase">
        Why you should work with us
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col"
          >
            <h3 className="font-semibold text-2xl text-indigo-700 mb-2">
              {work.title}
            </h3>
            <p className="text-gray-600 mb-4">{work.description}</p>
            <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
