import prof from './Images/prof.png'
import { details } from './data';

export default function Test() {
  return (
    <section id="Test">
      {
        details.map((values) =>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-400">
                This is a Test Page
                <br className="hidden lg:inline-block" />
                Welcome to {values.IGN}'s Test Homepage
              </h1>
              <p className="mt-10 mb-10 leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact Details
                </a>
                <a
                  href="#Gaming"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Gaming Links
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-full"
                alt="hero"
                src={prof}
              />
            </div>
          </div>
        )
      }

    </section>
  );
}