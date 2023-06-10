import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#Skills" className="flex items-center text-blue-gray-300 hover:text-blue-500 transition-colors">
                    Skills
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#Contact" className="flex items-center text-blue-gray-300 hover:text-blue-500 transition-colors">
                    Contact
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#Videos" className="flex items-center text-blue-gray-300 hover:text-blue-500 transition-colors">
                    Videos
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#Test" className="flex items-center text-blue-gray-300 hover:text-blue-500 transition-colors">
                    Test
                </a>
            </Typography>
        </ul>
    );
}

export default function Example() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto px-4 py-3 bg-black">
            
            <div className="flex items-center justify-center text-blue-gray-300">
                <Typography
                    as="a"
                    href="#About"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 hover:text-blue-600"
                >
                    Mikhaelin Ramsaroop
                </Typography>
                <Typography
                    as="a"
                    href="#Gaming"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 hover:text-blue-600"
                >
                    Carnag3ReapeR
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="Hamburger"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            <Collapse open={openNav}>
                <NavList />
            </Collapse>

        </Navbar>
    );
}