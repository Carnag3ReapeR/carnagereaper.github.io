
import React from "react";

export default function Navbar(){
    return(
        <header className="bg-black md:sticky top-0 z-10">
            <div className="container mx-auto flex flew-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#About" className="ml-3 text-xl">
                        About Me
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
                    <a href="#Contact" className="mr-5 hover:text-white">
                        Contact
                    </a>
                    <a href="#Gaming" className="mr-5 hover:text-white">
                        Gaming
                    </a>
                    <a href="#Skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                </nav>
                <a href="#Videos" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
                    Videos
                </a>
            </div>
        </header>
    );
}