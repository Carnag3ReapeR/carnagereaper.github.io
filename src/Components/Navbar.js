import React from "react";

export default function Navbar(){
    return(
        <header className="bg-gray-800 md:sticky top-0 z-0">
            <div className="container mx-auto flex flew-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-semibold hover:text-slate-500 text-slate-300 mb-4 md:mb-0">
                    <a href="#About" className="ml-3 text-xl md:border-teal-800 md:border-r-2 md:pr-4">
                        Mikhaelin Ramsaroop
                    </a>
                </a>
                <a className="title-font font-semibold hover:text-slate-500 text-slate-300 mb-4 md:mb-0">
                    <a href="#Gaming" className="ml-3 text-xl">
                        Carnag3ReapeR
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l-2 md:border-teal-800 flex flex-wrap items-center text-base justify-center">
                    <a href="#Contact" className="mr-5 hover:text-white md:border-r-2 md:border-teal-800 md:pr-4">
                        Contact
                    </a>
                    <a href="#Skills" className="mr-5 hover:text-white md:border-r-2 md:border-teal-800 md:pr-4">
                        Skills
                    </a>
                    <a href="#Videos" className="mr-5 hover:text-white md:border-r-2 md:border-teal-800 md:pr-4">
                        Videos
                    </a>
                </nav>
            </div>
        </header>
    );
}